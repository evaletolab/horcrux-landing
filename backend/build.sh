set -xe
rm -rf ./dist
mkdir dist
mkdir ./dist/data
cp -r data/empty.sqlite ./dist/data/
cp -r data/.htaccess ./dist/data/
cp -r lib ./dist
# cp -r logs ./dist
cp -r vendor ./dist
cp index.php ./dist
cp htaccess/.htaccess ./dist
cp robots/robots.txt ./dist
echo "all done!"
