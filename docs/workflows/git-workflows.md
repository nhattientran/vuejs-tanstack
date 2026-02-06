# Git Workflows

## Git Worktree Feature Development

For isolated feature development (e.g., SCR tickets):

```bash
# Create worktree with new branch
git worktree add -b <branch-name> ../<folder-name>

# Navigate to worktree
cd ../<folder-name>

# Install dependencies and verify dev server
pnpm install
pnpm dev
```

Always verify the dev server starts successfully before beginning implementation.
