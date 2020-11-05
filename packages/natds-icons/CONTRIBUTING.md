# NatDS Icons

Natura Design System - Icons

## To include a new Icon - Adding the icon

- put the SVG in the `svg/` folder 
- `yarn build:icons` 
- Run the tests: `yarn tests`
- Run regression tests: `yarn test:regression`
  - This test should fail and you can check the diff at the path indicated on failure msg.
- If the diff is as expected, you can update these tests: `yarn test:regression:update`
- To finish, update the snapshot tests: `yarn tests:outputs -u`


## Open PR with changes
- Create a branch with name "feat/branch_name"
- Commit your changes adding at the commit name the type `feat`
- Open the PR

After perform all checks, your contribution will merged and publish :)

