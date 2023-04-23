const fs = require("fs/promises");
const path = require("path");

const Jimp = require("jimp");

const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../..", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tmpUpload, filename } = req.file;

  const avatarName = `${_id}_${filename}`;

  const resultUpload = path.join(avatarsDir, avatarName);
  await fs.rename(tmpUpload, resultUpload);

  const avatarImage = await Jimp.read(resultUpload);
  await avatarImage.resize(250, 250).write(resultUpload);

  const avatarURL = path.join("avatars", avatarName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
