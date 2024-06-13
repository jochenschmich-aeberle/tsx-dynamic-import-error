# tsx-dynamic-import-error

Do the following:

1. Run `cd ./esm`
2. Run `npm install`
3. Run `npx tsx .\src\variant1.ts` - should log `2` to the console
4. Run `npx tsx .\src\variant2.ts` - should log `2` to the console
5. Run `cd ..`
6. Run `cd ./cjs`
7. Run `npm install`
8. Run `npx tsx .\src\variant1.ts` - should log `2` to the console
9. Run `npx tsx .\src\variant2.ts` - should log `2` to the console BUT IT LOGS `1`

The difference between the folders is that:
- `./esm/package.json` has `type="module"`
- `./cjs/package.json` has `type="commonjs"`

The difference between the variants is that the dynamic imports are sorted differently.