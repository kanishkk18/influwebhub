import Creator from "@/model/Creator";
import connectDB from "@/middleware/mongoose";


const login = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            try {
                const creator = await Creator.findOne({ email: req.body.email });
                if (creator) {
                    creator.profileImage = req.body.profileImage?req.body.profileImage:creator.profileImage;
                    await creator.save();
                    res.status(200).json({ success: true, message: "Profile Image Updated" });
                    return;
                }else{
                 
                    res.status(400).json({ success: false, message: "Creator not exist" });

                }

            } catch (err) {
                res.status(200).json({ success: false, message: 'Invalid request' });
            }

        } else {
            res.status(200).json({ message: "abe kaam kr le bhai subha dena hai" });
        }
    }
    else {
        res.status(200).json({ message: "Abeyy Padhai likhai karo IAS~YAS Bano" });
    }
}

export default connectDB(login);
