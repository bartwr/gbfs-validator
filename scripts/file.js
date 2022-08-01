import fs from 'fs';
import path from 'path';

export const getAllDirFiles = function(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllDirFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(file)
    }
  })

  return arrayOfFiles
}

export const store_data_file = async (filePath, text) => {
  const root = path.resolve()
  const absolutePath = `${root}/data/${filePath}`;
  await fs.writeFileSync(absolutePath, text);
}
