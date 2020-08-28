# Comics Marvel - Mobile App

## Requirements 
- node >= 8
- ionic v6
- capacitor

### Install ionic
```
npm install -g @ionic/cli native-run cordova-res
```

### Clon repository
```
git clone https://github.com/JuanJose21/ionic-marvel-comics.git
```

```
cd ionic-marvel-comics
```

### Install dependencies
```
npm install
```

### Run app in web server
```
ionic serve
```

### Run app in device
> remove the braces **{}** and replace **platform** depending on the device **(android - ios)**
1. Build the app
```
ionic build
```

2. Build the app to platform
```
npx cap add {platform}
```

3. Copying Web Code
```
npx cap copy
```

4. Create icons and splash screen.
> Android and iOS
```
npm run resources
```
> Only platform
```
npm run resources-{platform}
```

5. Running on platfom
```
npx cap open {platform}
```