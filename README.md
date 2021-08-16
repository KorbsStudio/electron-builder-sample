# Electron Builder Sample
## Previews
### Application
Application Preview            |  Windows Installer    | macOS Installer         
:-------------------------:|:-------------------------:|:-------------------------:
<img width="350" src="https://i.imgur.com/qYUhs04.png">   |  <img width="350" src="https://i.imgur.com/ftiXdoR.png">|  <img width="350" src="https://i.imgur.com/t1oQFgd.png">

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

#### Using with GitHub Actions
This template includes workflow file already prepared to build for Windows, macOS, and Linux. Go to the Actions tab, select "Build Executable Files", then under "Run workflow" click Run. After the Action is completed, you can download the files from the Summary of the action.
