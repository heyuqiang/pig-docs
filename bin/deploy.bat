
npm run docs:build

cd docs/.vitepress/dist

echo 'www.pigcloud.net' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:heyuqiang/heyuqiang.github.io.git master
