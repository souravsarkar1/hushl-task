const FileTypes = {
    PROFILE_IMAGE: "profileImage",
    CONTENT_MEDIA: "contentMedia",
    LINKEDIN: "linkedin",
    CHATROOM_IMAGE: "chatRoomImage",
    INSTAGRAM_IMAGE: "instagramImage",
    ADMIN_FILE: "adminFile",
    EXPERIENCE_FILE: "experienceFile",
    FORM_MEDICAL: "medical-files",
    FORM_DEFIBRILLATORS: 'defibrillators'
  };
  
 const FileTypeToDirectories = {
    [FileTypes.PROFILE_IMAGE]: "profile-images",
    [FileTypes.CONTENT_MEDIA]: "content-media",
    [FileTypes.LINKEDIN]: "linkedin",
    [FileTypes.CHATROOM_IMAGE]: "chat-room-images",
    [FileTypes.INSTAGRAM_IMAGE]: "instagram-images",
    [FileTypes.ADMIN_FILE]: "admin-files",
    [FileTypes.EXPERIENCE_FILE]: "experience-files",
    [FileTypes.FORM_MEDICAL]: "medical-files",
    [FileTypes.FORM_DEFIBRILLATORS]: 'defibrillators'
  };
  
module.exports = {FileTypeToDirectories, FileTypes}
  