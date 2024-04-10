import Email from "@/models/email.mongoose";
import { connectDb } from "@/shared/utils/mongoose";

interface EmailProps {
  emailID: string;
  ownerID: string;
  ownerName: string;
  email: string;
  title: string;
  content: string;
}

const saveEmail = async ({
  emailID,
  ownerID,
  ownerName,
  email,
  title,
  content,
}: EmailProps) => {
  try {
    await connectDb();
    const existed_email = await Email.findOne({
      emailID,
      ownerID,
      ownerName,
      email,
      title,
      content,
    });

    if (existed_email) {
      await Email.findByIdAndUpdate(existed_email._id, {
        content,
      }).then(() => console.log("Found existing email"));
      return { message: "Updated existing email successfully" };
    } else {
      await Email.create({
        emailID,
        ownerID,
        ownerName,
        email,
        title,
        content,
      })
        .then((saved_email) => {
          console.log(`New email saved as ${saved_email}`);
        })
        .catch((error) => console.log(error));
    }
  } catch (err) {
    console.log(err);
  }
};
