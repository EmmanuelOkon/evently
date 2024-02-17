"use server";

import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import { toast } from "sonner";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);

    if (!organizer) {
      toast.error("Error creating event");
      throw new Error("Organizer not found");
    }

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    return JSON.parse(JSON.stringify(newEvent));

  } catch (error) {
    handleError(error);
    toast.error("Error creating event");
  }
};
