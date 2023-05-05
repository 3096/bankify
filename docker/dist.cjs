const fs = require('fs-extra');
const path = require('path');

const projectDir = path.join(__dirname, '..');
const distDir = path.join(projectDir, 'dist-docker');
const appDir = path.join(distDir, 'app');
const prismaDir = path.join(appDir, 'prisma');

// Remove the ./dist directory and its contents
process.argv.includes('clean')
  ? fs.existsSync(distDir) && fs.rmSync(distDir, { recursive: true })
  : fs.existsSync(appDir) && fs.rmSync(appDir, { recursive: true });

// Recreate the ./dist/app/prisma directory
fs.mkdirSync(prismaDir, { recursive: true });

// Copy the contents
fs.copyFileSync(
  path.join(projectDir, 'docker', 'docker-compose.yml'),
  path.join(distDir, 'docker-compose.yml')
);
fs.copyFileSync(
  path.join(projectDir, 'prisma', 'schema.prisma'),
  path.join(prismaDir, 'schema.prisma')
);
fs.copySync(path.join(projectDir, 'build'), path.join(appDir, 'build'));

// Create a new package.json file with the relevant properties
const { type, dependencies } = JSON.parse(
  fs.readFileSync(path.join(projectDir, 'package.json'), 'utf-8')
);
fs.writeFileSync(
  path.join(appDir, 'package.json'),
  JSON.stringify(
    {
      type,
      dependencies,
      scripts: {
        'dist:start': 'npm i --omit dev && npx -y prisma db push && node build'
      }
    },
    null,
    2
  )
);
