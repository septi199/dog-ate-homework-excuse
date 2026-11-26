# The Dog Ate My Homework: Funniest Excuse

[![make.fun · u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/septi199/dog-ate-homework-excuse/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/septi199/dog-ate-homework-excuse/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

One line, under 200 characters, in which a dog explains why it ate the
homework — entered in
[The Dog Ate My Homework: Funniest Excuse](https://make.fun/c/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?ref=xaqxgz17)
on make.fun.

## The excuse

> It was blank, it smelled like pencil, and honestly it was the only homework in the house that never once threw a ball for me.

## How it works

`main.ts` writes the line deterministically to `entry.txt` in
`$MAKEFUN_OUTPUT_DIR` (default `/output`), then reads the file back and
verifies it byte-for-byte, throwing if anything differs.

```sh
node main.ts
```

Requires Node 22.18 or later.
