# Electron Builder Sample
In progress

## Do To List
 - For auto updating to work on macOS (DMG), I need to add code signing for GitHub Actions [Possible](https://localazy.com/blog/how-to-automatically-sign-macos-apps-using-github-actions)
 - ~~Learn how to make GitHub Actions build a `.appx` file using [`electron-windows-store`](https://github.com/felixrieseberg/electron-windows-store)~~
   - ~~Learn to add Windows SDK (Required)~~
   - ~~Make sure Microsoft Store can accept the file (I own a Developer account, so I can make sure)~~
 - ~~Create template images for installers~~
   - ~~Background for DMG (macOS)~~
   - ~~Sidebar background for NSIS (Windows, if not using oneClick set to true)~~

## Previews
### Application
![image](https://i.imgur.com/qYUhs04.png)

### Installer - Windows (NSIS using assisted installer)
![image](https://i.imgur.com/ftiXdoR.png)

### Installer - macOS (DMG)
![image](https://i.imgur.com/t1oQFgd.png)

## Documentation
It's probably best that you read documentation from the official website at [electron.build](https://www.electron.build/).

### Publish
I'm only aware with how GitHub and self-hosting works, when it comes to including auto-updates.

For other options like S3 or Amazon, go to the offiical website at [electron.build](https://www.electron.build/).

#### GitHub
```
"publish": [
    {
    "provider": "github",
    "owner": "username",
    "repo": "repo_name",
    "releaseType": "draft"
    }
]
```

If you plan to not use the GitHub Actions included with this template, you'll need to either set your GitHub Token in the environment or add it manually to the configuration(not recommended).

To set GitHub Token in the enviroment on Windows, run Powershell as admin and run:
```
[Environment]::SetEnvironmentVariable("GITHUB_TOKEN","<YOUR_TOKEN_HERE>","User")
```

macOS/Linux:
```
export GH_TOKEN="<GITHUB_TOKEN_HERE>"
```

To set it manually, just add `"token": "<GITHUB_TOKEN_HERE>"` to the publish configuration, which is not recommended.

The template includes a publish command, seen in __package.json__, which can be run by using:
```
npm run publish
```

#### Self-Hosted
```
"publish": [
    {
    "provider": "generic",
    "url": "https://example.com/update/",
    "channel": "latest"
    }
]
```

Make sure the URL contains the __latest-OS.yml__ file, if you're including auto-updates with the application.

NOTE: Don't use Node 16.x with Electron Builder, there seems to be an error with macOS. 
