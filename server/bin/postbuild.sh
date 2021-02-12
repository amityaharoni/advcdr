rm -rf server/public
mkdir -p server/public
cp -r client/build/* server/public
mv server/public/index.html server/views/index.ejs
mv server/public/static/* server/public