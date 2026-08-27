"use server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { getAvailableUsernameSuggestions } from "../utils";
import { error } from "console";
import { ProfileFormData } from "@/modules/links/components/link-form";


export const checkProfileUsernameAvailability = async (usename: string) => {
    if (!usename) return { available: false, suggestion: [] }
    const user = await db.user.findUnique({
        where: {
            usename: usename
        }
    })
    if (!user)
        return { available: true }

    const suggestions = await getAvailableUsernameSuggestions(usename, 3, 10)

    return {
        available: false,
        suggestions
    }


}

export const claimUsernmae = async (usename: string) => {
    const logedInUser = await currentUser();

    if (!logedInUser) return {
        success: false, error: "No authenticated user faund"
    }

    const user = await db.user.update({
        where: {
            clerk: logedInUser.id
        },
        data: {
            usename: usename
        }

    })

    if (!user) return { success: false, eror: "No authenticated user faund" };
    return { success: true };

}

export const getCurrentUsrername = async () => {
    const user = await currentUser();
  
    const CurrentUsrername = await db.user.findUnique({
        where: {
            clerk: user?.id
        },
        select: {
            usename:true,
            lastName:true,
            id:true,
            bio:true,       //add
            socialLinks:true
        }
    })
    return CurrentUsrername;


}

export const createUserProfile = async (data: ProfileFormData) => {
  const user = await currentUser();

  if (!user) return { success: false, error: "No authenticated user found" };

  try {
    const profile = await db.user.update({
      where: {
        clerk: user.id
      },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        bio: data.bio,
        imageUrl: data.imageUrl,
        usename: data.username,
      }
    });

    return {
      success: true,
      message: "Profile created successfully",
      data: profile
    }
  } catch (error) {
    return {
      success: false,
      error: "Failed to update profile"
    }
  }
}

export const getUserByUsername = async (username:string)=>{

  const currentUsername = await db.user.findUnique({
    where:{
      usename:username
    },
   include:{
    
    links:true,
    socialLinks:true
   }
   
  })
  return currentUsername;
}