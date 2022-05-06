# Instructions for development

---

## Working on your branch

The [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) assumes *one central repository* and the `main` branch represents the official project history.

Instead of committing directly to your local `main` branch, create a **new** branch to work on a **particular feature**. Feature branches should have *descriptive names* (e.g., "animated-menu-items").

Feature branches can (and *should*) be pushed to the central repository (on GitHub). The only *special* branch is `main`. **Don't ever push anything to** `main`! The following is a brief overview of how to do your work:

### 1. Start with the main branch

All feature branches are created off the latest code state of a project. Assume that the `main` branch on GitHub is always up-to-date. First, check out the `main` branch on your machine, pull the latest updates, and reset the repo's local copy of `main` to match the latest version:
```
git checkout main
git fetch origin
git reset --hard origin/main
```

### 2. Create a new feature branch

Use a **separate branch for each feature/issue you work on**. You can create a branch and check it out in one command as follows:
```
git checkout -b new-branch-name
```

### 3. Update, add, and commit changes

**On your feature branch**, you can edit, stage, and commit changes as usual.
```
git status
git add some_file
git commit -m "Some descriptive message--better messages help when we need to undo changes"
```

### 4. Push feature branch to remote (GitHub)

When ready, push your commits, updating the feature branch on GitHub. It's a good idea to push the feature branch up to the central repository so we can see what you're doing. To push `new-branch-name` to the central repository (GitHub), issue:
```
git push -u origin new-branch-name
```

**NOTE**: The `-u` flag adds the local branch you created in step 2 as a remote tracking branch. After setting up the tracking branch, `git push` can be invoked without any parameters to automatically push the `new-branch-name` branch to the central repo (GitHub).

### 5. Done implementing the feature? Create a pull request!

When you've finished implementing and testing the feature your branch was created to work on, create a pull request through GitHub.

# Running your code

---

## Getting Started

**You will first need to create a `.env.local` file in the project's root directory**. This will store all of the environment variables we need for this project, including the port on which to run the Node.js server as well as all of the set-up for the
Firebase/Firestore stuff. I will post my `.env.local` file on Discord/Slack so you can copy it. Obviously, this file cannot
be uploaded to GitHub (it's in the .gitignore for a reason!) because that would allow anyone to access our database (probably not good).

Then, install all the node modules, as usual:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

You should see a message that says:
```bash
Node.js server listening on port PORT...
```

Open http://localhost:PORT with your browser to see the result.

## Working with Firestore

In order to access the Firestore Database admin panel (really useful for seeing if you're adding/removing data properly or to manually do so), click [here](https://console.firebase.google.com/). I created an account we can all share and will post the credentials in Slack/Discord (feel free to DM me if you need help, obviously). Log in to that account. Navigate to our project (named "Rumble"). In the left sidebar, you should see "Firestore Database". Click that. You should see two collections (as of when I'm writing this): restaurants and users. Again, anything you're unsure about, just ask!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
