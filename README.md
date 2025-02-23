# Bowtie salary tax calulator

- ref: [HK Govt Tax Calculators](https://www.gov.hk/tc/residents/taxes/etax/services/tax_computation.htm#TaxComputation)
- ref: [報稅2023懶人包｜免稅額扣稅項目/網上報稅教學/遲交罰款/計算機](https://www.hk01.com/%E7%86%B1%E7%88%86%E8%A9%B1%E9%A1%8C/895425/%E5%A0%B1%E7%A8%852023%E6%87%B6%E4%BA%BA%E5%8C%85-%E5%85%8D%E7%A8%85%E9%A1%8D%E6%89%A3%E7%A8%85%E9%A0%85%E7%9B%AE-%E7%B6%B2%E4%B8%8A%E5%A0%B1%E7%A8%85%E6%95%99%E5%AD%B8-%E9%81%B2%E4%BA%A4%E7%BD%B0%E6%AC%BE-%E8%A8%88%E7%AE%97%E6%A9%9F)
- https://datanews.hk01.com/widget/tax2022/index.html
- UI ref: [保險個人化建議 | 保泰人壽 | Bowtie](https://www.bowtie.com.hk/zh/insurance/recommendation/result)
- Client's ref: https://acaccountinghk.com/individul-tax-calculator/
- [comment 1](https://docs.google.com/presentation/d/192nMulM5mE0nsyBKtvFePl1L2GLdqgL8wTKAH6QRk9A/edit#slide=id.g2380bf92885_0_149)
- [comment 2](https://docs.google.com/presentation/d/1YZDGhTne86sLP0kex2ZflhGqRv-SgyS16WlhxhH-H7U/edit#slide=id.p)


## API of Wordpress

```
For the API link, our engineer said you can create one following this guide >> https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/

And the link might look like the below:

https://www.bowtie.com.hk/blog/wp-json/contact-form-7/v1/contact-forms/<FORM_ID>/feedback
```


## TODO

- [ ] Data coolection from Context
- [ ] mobile UI
- [ ] error hint
- [ ] versioning on Github Page

## Information will be collected

- Marital Status
- Income
- No. of owned property
- No. of children
- No. of dependents (eg retired parents)
- No. of VHIS policies

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook`

Start Storybook to view the components

### `yarn deploy`

Deploy to Github Pages


## WordPress

- Contact Form 7
    - https://wordpress.org/plugins/contact-form-cfdb7/
