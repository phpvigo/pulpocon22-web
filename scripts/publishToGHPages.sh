cd ..
rsync -rav dist/ gh-pages --exclude ".*/"
cd gh-pages
git add -A
git commit -m 'Publish build'
git push origin main --force
cd ..

