# About
Simple to use and setup ESLint configuration that enforces good coding practices.

If you want to checkout all the rules applied to this config, checkout their [repo](https://github.com/airbnb/javascript)

# Usage
To install run `npm install --save-dev eslint eslint-plugin-import eslint-config-airbnb-base`

Add script to package.json `"lint":"eslint ."` and run it with `npm run lint`, if you want to automatically fix errors run it with `npm run lint -- --fix`

# Config
To configure create the following file in root `.eslintrc.json`

Add the following 3 key:value pairs:

- `env` - sets the configuration for node projects
- `extends` - imports the airbnb-base plugin (requires `eslint-plugin-import`)
- `rules` - add specific eslint rules, you can view them all over [here](https://eslint.org/docs/latest/rules/), but since `airbnb-base` turns on no-console by default, we are turning that off.

```json
{
    "env":{
        "node":true
    },
    "extends":"airbnb-base",
    "rules":{
        "no-console":"off"
    }
}
``` 