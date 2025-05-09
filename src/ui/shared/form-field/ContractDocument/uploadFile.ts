import { uploadFile as uploadFileAPI } from '@shared/api'

const uploadFile = async (file: File) => {
  const response = await uploadFileAPI(file)
  return response.id
}

export default uploadFile
