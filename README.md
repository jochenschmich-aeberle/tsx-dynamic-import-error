# tsx-dynamic-import-error

Prerequisites: `NodeJS 20.14.0`.

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
10. Change `tsx` version in `package.json` to version `4.11.2`
11. Run `npx tsx .\src\variant2.ts` - should log `2`
12. Change `tsx` version in `package.json` to version `4.12.0`
13. Run `npx tsx .\src\variant2.ts` - should log `2` to the console BUT IT LOGS `1`

The difference between the folders is that:
- `./esm/package.json` has `type="module"`
- `./cjs/package.json` has `type="commonjs"`

The difference between the variants is that the dynamic imports are sorted differently.