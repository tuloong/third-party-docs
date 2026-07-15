# Issue Blue Invoice

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2150785412886953993&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2150785412886953993/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2150785412886953993
- API 类目：开票申请
- 所属目录：开票（Invoicing）
- 产品：
- 更新时间：2026-06-10 18:12:29.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 237 个
- 返回字段数：3 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `data`
   - 类型：object
   - 数组：否
   - 必填：是
   - 说明：Parameter Body

2. `data.einvoiceApplyList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Invoice Request Body (Important: This request body is for basic VAT invoice types; for special invoice types,
     refer to the content in the request examples)

3. `data.einvoiceApplyList.orgcode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Organization Code (If one tax number corresponds to multiple tax organizations (associated invoicing site
     records), this field is mandatory to determine the unique tax organization (associated invoicing site
     records))

4. `data.einvoiceApplyList.lyid`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Request Source Unique Identifier

5. `data.einvoiceApplyList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Invoice Request SN

6. `data.einvoiceApplyList.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`32`
   - 说明：Invoice Type: 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice; 5: Motor Vehicle Sales Unified Invoice; 8: VAT Electronic Normal Invoice (Refined Oil);
     10: Refined Oil Normal Invoice; 11: Refined Oil Special Invoice; 15: Used Car Sales Unified Invoice; 31:
     Digital Electronic Special Invoice; 32: Digital Electronic Normal Invoice; 33: Digital Electronic Paper
     Invoice (VAT Special Invoice); 34: Digital Electronic Paper Invoice (Normal Invoice); Optional, default is 1

7. `data.einvoiceApplyList.sdLc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Digital and paper invoice copy information. Enumeration as follows: 
     {"label":"2016 Edition VAT Normal Invoice (Two-copy Folded)","value":"04","type":"3"} 
     {"label":"2016 Edition VAT Normal Invoice (Five-copy Folded)","value":"05","type":"3"} 
     {"type":"3","label":"2008 Edition VAT Normal Invoice (Five-copy No Amount Limit)","value":"000008101500"} 
     {"label":"VAT Special Invoice (Chinese Three-copy No Amount Limit)","value":"1130","type":"1"}

8. `data.einvoiceApplyList.tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Special Invoice Types. 0-General, 2-Fuel VAT Special Invoice, 8-Agricultural Products Sales, 9-Agricultural
     Products Purchase, 11-Tobacco Invoice, 12-Motor Vehicle Invoice, 14-Refined Oil Invoice, DK-Agent Invoice,
     16-Mineral Products Invoice, E01-Refined Oil Invoice, E02-Rare Earth Invoice, E03-Construction Service
     Invoice, E04-Goods Transportation, E05-Real Estate Sales, E06-Real Estate Leasing Service Invoice, E07-Agent
     Collection of Vehicle and Vessel Tax, E09-Passenger Transportation, E12-Self-produced Agricultural Products
     Sales, E14-Motor Vehicle, E16-Agricultural Products Purchase, E17-Photovoltaic Purchase, E18-Cigarette
     Invoice, E22-Electronic Itinerary, E32-Electronic Cigarette, (Special invoice types starting with E correspond
     to Fully Digitalized E-invoices, others are Tax Control Invoices)

9. `data.einvoiceApplyList.zsfs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Taxation Method 0-Normal Taxation 2-Differential Taxation/Differential Invoicing 3-Full Amount Invoicing

10. `data.einvoiceApplyList.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Seller Taxpayer ID No.

11. `data.einvoiceApplyList.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller Name If empty, obtain the seller name configured on the invoice platform; for issuing special invoice
     types - electronic itinerary, this field is mandatory.

12. `data.einvoiceApplyList.xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing XX 83869965`
   - 说明：If the seller's address and phone number are empty, obtain the seller's address and phone number configured on
     the invoice platform.

13. `data.einvoiceApplyList.xsfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing XX`
   - 说明：Seller Address If empty, obtain the seller address configured in the invoice platform Digital and electronic
     special field

14. `data.einvoiceApplyList.xsfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`83869965`
   - 说明：Seller's Phone Number If empty, obtain the seller's phone number configured in the invoice platform Digital
     Invoice Dedicated Field

15. `data.einvoiceApplyList.xsfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`China Merchants Bank`
   - 说明：Seller's Bank, Digital Finance Dedicated Field

16. `data.einvoiceApplyList.xsfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`9645555111254`
   - 说明：Seller Account, Digital Electronics Dedicated Field

17. `data.einvoiceApplyList.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Taxpayer ID No.

18. `data.einvoiceApplyList.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer

19. `data.einvoiceApplyList.gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Purchaser Address and Phone Number Fully Digitalized E-invoice This field is not mandatory

20. `data.einvoiceApplyList.gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Purchaser's Bank Account Number This field is not mandatory for Fully Digitalized E-invoice

21. `data.einvoiceApplyList.gmfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing XX`
   - 说明：Purchaser Address, Dedicated Field for Digital Electronics

22. `data.einvoiceApplyList.gmfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`01055587444`
   - 说明：Buyer Phone, Dedicated Field for Digital Electronics

23. `data.einvoiceApplyList.gmfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`China Merchants Bank`
   - 说明：Purchaser's Bank, Dedicated Field for Digital Transactions

24. `data.einvoiceApplyList.gmfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`596874512`
   - 说明：Purchaser Account, Dedicated Field for Digital Electronics

25. `data.einvoiceApplyList.zrrbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Buyer Natural Person Indicator  
     Used only when issuing digital general electronic invoices. If the invoice recipient (Invoice Header) is a
     natural person and requires the invoice to be aggregated and displayed in the personal invoice folder, the
     name and ID number (natural person taxpayer identification number) must be provided, and this parameter should
     be set to Y;  
     If the invoice recipient (Invoice Header) is an individual business, the unified social credit code or
     taxpayer identification number must be provided, and this parameter should be set to N.

26. `data.einvoiceApplyList.zjlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`101`
   - 说明：Certificate Type Code  
     Applicable to supplementary information for natural persons when the identifier is Y. Refer to the Traveler
     Certificate Type Code enumeration for details.  
     Mandatory when purchasing invoices or when the fields ZJHM or GUOJI have values.  
     
     101: Organization Code Certificate  
     102: Business License  
     103: Tax Registration Certificate  
     199: Other Organization Certificates  
     201: Resident Identity Card  
     202: Military Officer Certificate  
     203: Armed Police Officer Certificate  
     204: Soldier Certificate  
     205: Military Retired Cadre Certificate  
     206: Disability Certificate  
     207: Disabled Military Personnel Certificate (Levels 1-8)  
     208: Foreign Passport  
     210: Hong Kong and Macau Residents Travel Permit to Mainland  
     212: People's Republic of China Travel Permit for Hong Kong and Macau Residents  
     213: Taiwan Residents Travel Permit to Mainland  
     214: Mainland Residents Travel Permit to Taiwan  
     215: Foreigner Residence Permit  
     216: Diplomat Certificate  
     217: Embassy (Consulate) Certificate  
     218: Seaman Certificate  
     219: Hong Kong Permanent Resident Identity Card  
     220: Taiwan Identity Card  
     221: Macau Special Administrative Region Permanent Resident Identity Card  
     222: Foreigner Identity Document  
     224: Employment and Unemployment Registration Certificate  
     225: Retirement Certificate  
     226: Cadre Retirement Certificate  
     227: Chinese Passport  
     228: Urban Veteran Self-Employment Certificate  
     229: Military Family Member Identity Proof  
     230: Chinese People's Liberation Army Officer Transfer Certificate  
     231: Chinese People's Liberation Army Conscription Discharge Certificate  
     232: Chinese People's Liberation Army Non-Commissioned Officer Discharge Certificate  
     233: Foreigner Permanent Residence Identity Card (Foreigner Permanent Residence Permit)  
     234: Employment and Entrepreneurship Certificate  
     235: Hong Kong Special Administrative Region Passport  
     236: Macau Special Administrative Region Passport  
     237: People's Republic of China Hong Kong and Macau Residents Residence Permit  
     238: People's Republic of China Taiwan Residents Residence Permit  
     239: "People's Republic of China Foreigner Work Permit" (Category A)  
     240: "People's Republic of China Foreigner Work Permit" (Category B)  
     241: "People's Republic of China Foreigner Work Permit" (Category C)  
     291: Birth Medical Certificate  
     299: Other Personal Certificates

27. `data.einvoiceApplyList.zjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123123123`
   - 说明：Identification Number  
     Applicable to natural person supplementary information when the natural person identifier is marked as Y.  
     Mandatory when the acquisition invoice or the fields ZJLX and GUOJI have values.

28. `data.einvoiceApplyList.guoji`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`004`
   - 说明：Nationality Code  
     Applicable to supplementary information of natural persons when the natural person identifier is marked as Y.
     Refer to the National and Regional Code Enumeration for details.  
     Mandatory when acquisition invoice or both ZJLX and ZJHM fields have values.  
     
     004: Afghanistan  
     008: Republic of Albania  
     010: Antarctica  
     012: People's Democratic Republic of Algeria  
     016: American Samoa  
     020: Principality of Andorra  
     024: Republic of Angola  
     028: Antigua and Barbuda  
     031: Republic of Azerbaijan  
     032: Argentine Republic  
     036: Commonwealth of Australia  
     040: Republic of Austria  
     044: Commonwealth of The Bahamas  
     048: Kingdom of Bahrain  
     050: People's Republic of Bangladesh  
     051: Republic of Armenia  
     052: Barbados  
     056: Kingdom of Belgium  
     060: Bermuda  
     064: Kingdom of Bhutan  
     068: Republic of Bolivia  
     070: Bosnia and Herzegovina  
     072: Republic of Botswana  
     074: Bouvet Island  
     076: Federative Republic of Brazil  
     084: Belize  
     086: British Indian Ocean Territory  
     090: Solomon Islands  
     092: British Virgin Islands  
     096: Nation of Brunei, Abode of Peace  
     100: Republic of Bulgaria  
     104: Republic of the Union of Myanmar  
     108: Republic of Burundi  
     112: Republic of Belarus  
     116: Kingdom of Cambodia  
     120: Republic of Cameroon  
     124: Canada  
     132: Republic of Cape Verde  
     136: Cayman Islands  
     140: Central African Republic  
     144: Democratic Socialist Republic of Sri Lanka  
     148: Republic of Chad  
     152: Republic of Chile  
     156: People's Republic of China  
     158: Taiwan, China  
     162: Christmas Island  
     166: Cocos (Keeling) Islands  
     170: Republic of Colombia  
     174: Union of the Comoros  
     175: Mayotte  
     178: Republic of the Congo  
     180: Democratic Republic of the Congo  
     184: Cook Islands  
     188: Republic of Costa Rica  
     191: Republic of Croatia  
     192: Republic of Cuba  
     196: Republic of Cyprus  
     203: Czech Republic  
     204: Republic of Benin  
     208: Kingdom of Denmark  
     212: Commonwealth of Dominica  
     214: Dominican Republic  
     218: Republic of Ecuador  
     222: Republic of El Salvador  
     226: Republic of Equatorial Guinea  
     231: Federal Democratic Republic of Ethiopia  
     232: State of Eritrea  
     233: Republic of Estonia  
     234: Faroe Islands  
     238: Falkland Islands (Malvinas)  
     239: South Georgia and the South Sandwich Islands  
     242: Republic of Fiji  
     246: Republic of Finland  
     250: French Republic  
     254: French Guiana  
     258: French Polynesia  
     260: French Southern Territories  
     262: Republic of Djibouti  
     266: Gabonese Republic  
     268: Georgia  
     270: Republic of The Gambia  
     275: State of Palestine  
     276: Federal Republic of Germany  
     288: Republic of Ghana  
     292: Gibraltar  
     296: Republic of Kiribati  
     300: Hellenic Republic (Greece)  
     304: Greenland  
     308: Grenada  
     312: Guadeloupe  
     316: Guam  
     320: Republic of Guatemala  
     324: Republic of Guinea  
     328: Cooperative Republic of Guyana  
     332: Republic of Haiti  
     334: Heard Island and McDonald Islands  
     336: Vatican City State  
     340: Republic of Honduras  
     344: Hong Kong Special Administrative Region of China  
     348: Hungary  
     352: Republic of Iceland  
     356: Republic of India  
     360: Republic of Indonesia  
     364: Islamic Republic of Iran  
     368: Republic of Iraq  
     372: Ireland  
     376: State of Israel  
     380: Italian Republic  
     384: Republic of C?te d'Ivoire  
     388: Jamaica  
     392: Japan  
     398: Republic of Kazakhstan  
     400: Hashemite Kingdom of Jordan  
     404: Republic of Kenya  
     408: Democratic People's Republic of Korea  
     410: Republic of Korea  
     414: State of Kuwait  
     417: Kyrgyz Republic  
     418: Lao People's Democratic Republic  
     422: Lebanese Republic  
     426: Kingdom of Lesotho  
     428: Republic of Latvia  
     430: Republic of Liberia  
     434: Great Socialist People's Libyan Arab Jamahiriya  
     438: Principality of Liechtenstein  
     440: Republic of Lithuania  
     442: Grand Duchy of Luxembourg  
     446: Macao Special Administrative Region of China  
     450: Republic of Madagascar  
     454: Republic of Malawi  
     458: Malaysia  
     462: Republic of Maldives  
     466: Republic of Mali  
     470: Republic of Malta  
     474: Martinique  
     478: Islamic Republic of Mauritania  
     480: Republic of Mauritius  
     484: United Mexican States  
     492: Principality of Monaco  
     496: Mongolia  
     498: Republic of Moldova  
     499: Montenegro  
     500: Montserrat  
     504: Kingdom of Morocco  
     508: Republic of Mozambique  
     512: Sultanate of Oman  
     516: Republic of Namibia  
     520: Republic of Nauru  
     524: Kingdom of Nepal  
     528: Kingdom of the Netherlands  
     530: Netherlands Antilles  
     533: Aruba  
     540: New Caledonia  
     548: Republic of Vanuatu  
     554: New Zealand  
     558: Republic of Nicaragua  
     562: Republic of Niger  
     566: Federal Republic of Nigeria  
     570: Niue  
     574: Norfolk Island  
     578: Kingdom of Norway  
     580: Commonwealth of the Northern Mariana Islands  
     581: United States Minor Outlying Islands  
     583: Federated States of Micronesia  
     584: Republic of the Marshall Islands  
     585: Republic of Palau  
     586: Islamic Republic of Pakistan  
     591: Republic of Panama  
     598: Independent State of Papua New Guinea  
     600: Republic of Paraguay  
     604: Republic of Peru  
     608: Republic of the Philippines  
     612: Pitcairn  
     616: Republic of Poland  
     620: Portuguese Republic  
     624: Republic of Guinea-Bissau  
     626: Timor-Leste  
     630: Puerto Rico  
     634: State of Qatar  
     638: Réunion  
     642: Romania  
     643: Russian Federation  
     646: Republic of Rwanda  
     654: Saint Helena  
     659: Federation of Saint Kitts and Nevis  
     660: Anguilla  
     662: Saint Lucia  
     666: Saint Pierre and Miquelon  
     670: Saint Vincent and the Grenadines  
     674: Republic of San Marino  
     678: Democratic Republic of S?o Tomé and Príncipe  
     682: Kingdom of Saudi Arabia  
     686: Republic of Senegal  
     688: Serbia  
     690: Republic of Seychelles  
     694: Republic of Sierra Leone  
     702: Republic of Singapore  
     703: Slovak Republic  
     704: Socialist Republic of Vietnam  
     705: Republic of Slovenia  
     706: Somali Republic  
     710: Republic of South Africa  
     716: Republic of Zimbabwe  
     724: Kingdom of Spain  
     728: Republic of South Sudan  
     732: Western Sahara  
     736: Republic of the Sudan  
     740: Republic of Suriname  
     744: Svalbard and Jan Mayen  
     748: Kingdom of Swaziland  
     752: Kingdom of Sweden  
     756: Swiss Confederation  
     760: Syrian Arab Republic  
     762: Republic of Tajikistan  
     764: Kingdom of Thailand  
     768: Togolese Republic  
     772: Tokelau  
     776: Kingdom of Tonga  
     780: Republic of Trinidad and Tobago  
     784: United Arab Emirates  
     788: Republic of Tunisia  
     792: Republic of Turkey  
     795: Turkmenistan  
     796: Turks and Caicos Islands  
     798: Tuvalu  
     800: Republic of Uganda  
     804: Ukraine  
     807: Former Yugoslav Republic of Macedonia  
     818: Arab Republic of Egypt  
     826: United Kingdom of Great Britain and Northern Ireland  
     831: Guernsey  
     832: Jersey  
     833: Isle of Man  
     834: United Republic of Tanzania  
     840: United States of America  
     850: United States Virgin Islands  
     854: Burkina Faso  
     858: Oriental Republic of Uruguay  
     860: Republic of Uzbekistan  
     862: Bolivarian Republic of Venezuela  
     876: Wallis and Futuna  
     882: Independent State of Samoa  
     887: Republic of Yemen  
     891: Federal Republic of Yugoslavia  
     894: Republic of Zambia  
     A00: Kosovo

29. `data.einvoiceApplyList.einvoiceShowGxfYhZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Whether to display the buyer's and seller's bank and account numbers  
     0: Do not display  
     1: Display only the seller's bank and account numbers  
     2: Display only the buyer's bank and account numbers  
     3: Display both buyer's and seller's bank and account numbers

30. `data.einvoiceApplyList.einvoiceShowSkrShr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Whether to display payee and reviewer 0: Do not display 1: Display payee only 2: Display reviewer only 3:
     Display both payee and reviewer

31. `data.einvoiceApplyList.einvoiceShowGxfDzDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Whether to display address and phone number  
     0: Do not display  
     1: Display only the seller's address and phone number  
     2: Display only the buyer's address and phone number  
     3: Display both buyer's and seller's address and phone number

32. `data.einvoiceApplyList.dfgtgmbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Multi-party Joint Purchase Indicator  Y: Multi-party Joint Purchase  N: Non-Multi-party Joint Purchase

33. `data.einvoiceApplyList.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Billed By

34. `data.einvoiceApplyList.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Payee

35. `data.einvoiceApplyList.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reviewed By

36. `data.einvoiceApplyList.hjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total Amount

37. `data.einvoiceApplyList.hjse`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total Tax Amount

38. `data.einvoiceApplyList.jshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Amount Including Tax

39. `data.einvoiceApplyList.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Electronic invoice: for the basic channel (Electronic Tax Bureau), the maximum length is 200 characters; for
     the Leqi channel, the maximum length is 450 characters (Chinese characters, numbers, letters, etc. each count
     as one character); Tax Control Invoice: maximum length is 230 characters (Chinese characters count as two
     characters, numbers, letters, etc. count as one character).

40. `data.einvoiceApplyList.allElcUserName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`AA#@#`
   - 说明：Digital Invoice Username, SM4 Encryption

41. `data.einvoiceApplyList.allElcPassWord`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`ERCFCAC`
   - 说明：Digital Invoice Password, SM4 Encryption

42. `data.einvoiceApplyList.slsm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Explanation of Negative Invoice Tax Rate.  
     1: When a Small-scale Taxpayer issues an invoice with a 3% tax rate, a tax rate explanation must be provided;
     2: If an invoice has been previously issued and there are sales discounts, cancellations, returns, or other
     situations requiring a negative invoice, or if the invoice was issued incorrectly and needs to be reissued;  
     3: Due to actual business needs, the policy of enjoying the reduced VAT levy rate of 1% is waived.

43. `data.einvoiceApplyList.zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Custom Remark

44. `data.einvoiceApplyList.projectCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project No.

45. `data.einvoiceApplyList.acountOrgCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Accounting Entity Code

46. `data.einvoiceApplyList.wbsCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：WBS Number

47. `data.einvoiceApplyList.lydjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Source Document Number

48. `data.einvoiceApplyList.bmbBbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Product Code Table Version After adding the product code function, the product code table version downloaded
     from the tax bureau

49. `data.einvoiceApplyList.wxorderid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：WeChat Order Number After the merchant completes invoicing, the order number and merchant ID will be passed in
     to automatically insert into the user's WeChat Wallet (refer to WeChat Wallet Guide) (opens new window)

50. `data.einvoiceApplyList.wxappid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：WeChat Merchant appid After the merchant completes invoicing, the order number and merchant ID will be passed
     in to automatically insert into the user's WeChat card pack (refer to WeChat card pack guide) (opens new
     window)

51. `data.einvoiceApplyList.wxauthid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Authorization ID for WeChat batch card package insertion If using authorization for batch card package
     insertion, this parameter must be provided; otherwise, it is not required.

52. `data.einvoiceApplyList.sgbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Acquisition Flag 2 - Agricultural Product Acquisition (Used Car Reverse Invoicing)

53. `data.einvoiceApplyList.cpyqylb`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Enterprise Category Codes  
     Mandatory for Digital Used Car Invoices  
     01: Refined Oil Production Enterprise  
     02: Refined Oil Distribution Enterprise  
     03: Domestic Motor Vehicle Manufacturer  
     04: Office or General Authorized Agency of Imported Motor Vehicle Manufacturer in China  
     05: Authorized Motor Vehicle Dealer  
     06: Other Motor Vehicle Traders  
     07: Used Car Market  
     08: Used Car Dealership  
     09: Used Car Auction Enterprise  
     10: Rare Earth Mining Enterprise  
     11: Rare Earth Smelting and Separation Enterprise  
     12: Other Rare Earth Enterprises  
     13: Rare Earth Mining, Smelting and Separation, and Other Rare Earth Enterprises  
     14: Rare Earth Mining and Smelting and Separation Enterprises  
     15: Rare Earth Mining and Other Rare Earth Enterprises  
     16: Rare Earth Smelting and Separation and Other Rare Earth Enterprises  
     17: Cigarette Manufacturing Enterprise  
     18: Cigarette Wholesale Enterprise  
     19: Cigarette Export Enterprise  
     20: Manufacturing Export Enterprise  
     21: Foreign Trade Export Enterprise  
     22: Foreign Trade Comprehensive Service Enterprise  
     23: Pilot Enterprise in Free Trade Zone  
     24: Enterprise in Special Supervision Area  
     25: Pilot for VAT Normal Taxpayer Qualification  
     26: Market Procurement Pilot  
     27: Tax Refund Store  
     28: E-commerce Export Enterprise  
     29: Financing Leasing Enterprise Enjoying Export Tax Refund Policy  
     30: VAT Zero-Rated Taxable Service Provider  
     31: Real Estate Development Enterprise  
     32: Deep Processing Enterprise of Agricultural Products  
     33: Enterprises Purchasing Naphtha and Fuel Oil for Consumption Tax Refund  
     34: Other Traders Engaged in Motor Vehicle Import  
     35: Self-produced Agricultural Products  
     36: Agricultural Product Purchasing Enterprise  
     37: Photovoltaic Purchasing Enterprise  
     38: Housing Leasing Enterprise  
     39: Winter Olympics Tax Refund Enterprise  
     40: Renewable Resources Recycling  
     41: Ultra-luxury Car Retail Enterprise  
     42: Electronic Cigarette Manufacturing Enterprise  
     43: Electronic Cigarette Wholesale Enterprise  
     44: Insurance Industry Enterprise  
     45: Securities Industry Enterprise  
     46: Credit Card Industry Enterprise  
     47: Tourism Industry Enterprise  
     48: Baijiu (Chinese Liquor) Manufacturing Enterprise  
     49: Baijiu Associated Sales Unit  
     50: Resource Recycling Enterprise Reverse Invoicing - General Taxation  
     51: Resource Recycling Enterprise Reverse Invoicing - Simplified Taxation

54. `data.einvoiceApplyList.tdzzsxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Land VAT Project Number Digital Special Invoice Type - Construction Service Mandatory

55. `data.einvoiceApplyList.kdsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Cross-Address Flag  
     Mandatory for Digital Special Invoice Types - Real Estate Leasing Services and Construction Services.  
     Enum Y: Yes; N: No

56. `data.einvoiceApplyList.kqysssxbgglbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Cross-Region Tax-Related Matters Filing Management Number  
     Digital Special Invoice Type - Exclusive Property for Construction Services.  
     For non-LQ channels, when the "Cross-City Indicator" is "Yes," the "Cross-Region Tax-Related Matters Filing
     Management Number" is mandatory; when the "Cross-City Indicator" is "No," the "Cross-Region Tax-Related
     Matters Filing Management Number" must not be filled in.

57. `data.einvoiceApplyList.administrativeDivisionCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`440105`
   - 说明：Administrative Division Code

58. `data.einvoiceApplyList.subdistrictCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`440105001`
   - 说明：Subdistrict Code

59. `data.einvoiceApplyList.isTaxProfessionalServiceInvoiceItem`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Is TaxProfessional Service Invoice Item

60. `data.einvoiceApplyList.taxProServiceAgreementNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Pro Service AgreementNo

61. `data.einvoiceApplyList.jazs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`05`
   - 说明：Reduced Tax Levy Method Code

62. `data.einvoiceApplyList.qyDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Region Code

63. `data.einvoiceApplyList.ylywlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Medical Business Serial Number

64. `data.einvoiceApplyList.hzxm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Patient Name

65. `data.einvoiceApplyList.hzsfzjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Patient ID Type Code

66. `data.einvoiceApplyList.hzsfzjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Patient ID Number

67. `data.einvoiceApplyList.mzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Outpatient Number

68. `data.einvoiceApplyList.mzjzsj`
   - 类型：date
   - 数组：否
   - 必填：否
   - 示例/默认值：`2026-04-29 11:29:18`
   - 说明：Specific Medical Business - Outpatient Visit Time

69. `data.einvoiceApplyList.blh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Medical Record Number

70. `data.einvoiceApplyList.zyh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Inpatient Number

71. `data.einvoiceApplyList.zykb`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Inpatient Department

72. `data.einvoiceApplyList.zysjq`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Inpatient Start Date

73. `data.einvoiceApplyList.zysjz`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Inpatient End Date

74. `data.einvoiceApplyList.yjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Prepaid Amount

75. `data.einvoiceApplyList.bjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Supplementary Payment Amount

76. `data.einvoiceApplyList.tfje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Refund Amount

77. `data.einvoiceApplyList.yljglxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Medical Institution Type Code

78. `data.einvoiceApplyList.qtyljglx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Other Medical Institution Type

79. `data.einvoiceApplyList.yblxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Medical Insurance Type Code

80. `data.einvoiceApplyList.qtyblx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Other Medical Insurance Type

81. `data.einvoiceApplyList.ybbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Medical Insurance Number

82. `data.einvoiceApplyList.xbDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Gender Code

83. `data.einvoiceApplyList.ybtcjjzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Medical Insurance Pool Payment Amount

84. `data.einvoiceApplyList.qtzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Other Payment Amount

85. `data.einvoiceApplyList.grzhzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Personal Account Payment Amount

86. `data.einvoiceApplyList.grxjzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Personal Cash Payment Amount

87. `data.einvoiceApplyList.grzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Patient Out-of-Pocket Amount

88. `data.einvoiceApplyList.grzfje1`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Patient Self-Pay Amount

89. `data.einvoiceApplyList.jkr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Payer

90. `data.einvoiceApplyList.skdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Payee Company

91. `data.einvoiceApplyList.tspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Digital Special Ticket Type Other Element Property Set Digital Special Ticket Type - Mandatory for
     Construction Services and Passenger Transportation, etc.

92. `data.einvoiceApplyList.tspzs.ysmxxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Shipping Detail Serial Number

93. `data.einvoiceApplyList.tspzs.ysgjzl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Types of Transportation Tools

94. `data.einvoiceApplyList.tspzs.ysgjph`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Transport Vehicle License Plate Number

95. `data.einvoiceApplyList.tspzs.qyd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Place of Departure

96. `data.einvoiceApplyList.tspzs.ddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Destination

97. `data.einvoiceApplyList.tspzs.yshwmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Name of Transported Goods

98. `data.einvoiceApplyList.tspzs.cxrxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Traveler Number

99. `data.einvoiceApplyList.tspzs.cxr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Traveler

100. `data.einvoiceApplyList.tspzs.chuxrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2022-02-22`
   - 说明：Date of Departure

101. `data.einvoiceApplyList.tspzs.cxrzjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Traveler Identification Document Type Code

102. `data.einvoiceApplyList.tspzs.sfzjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：ID Document Number

103. `data.einvoiceApplyList.tspzs.cfd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Departure

104. `data.einvoiceApplyList.tspzs.lkddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Destination

105. `data.einvoiceApplyList.tspzs.zwdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：If the mode of transportation is train, airplane, or ship, the seat class is a required field; for other
     options, it is optional;  
     --- For train: First Class Seat, Second Class Seat, Soft Seat (Soft Seat, Soft Sleeper), Hard Seat (Hard Seat,
     Hard Sleeper)  
     --- For airplane: Economy Class, First Class, Business Class  
     --- For ship: First Class Cabin, Second Class Cabin, Third Class Cabin

106. `data.einvoiceApplyList.tspzs.jtgjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Transportation Mode Type Code (1: Airplane 2: Train 3: Long-distance Bus 4: Public Transit 5: Taxi 6: Car 7:
     Ship 9: Other)

107. `data.einvoiceApplyList.tspzs.sszdyysxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Provincial/Municipal Custom Element Serial Number

108. `data.einvoiceApplyList.tspzs.sszdyysmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Provincial/Municipal Custom Element Name

109. `data.einvoiceApplyList.tspzs.sszdyysnr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Provincial/Municipal Custom Element Content

110. `data.einvoiceApplyList.bdcxsTspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Digital Special Ticket Types Real Estate Property Set Digital Special Ticket Types - New Version Real Estate
     Sales and Real Estate Leasing Required Fields.

111. `data.einvoiceApplyList.bdcxsTspzs.tdzzsxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Land Value-added Tax Project Number. Special Electronic Invoice Type - Mandatory for Real Estate Sales

112. `data.einvoiceApplyList.bdcxsTspzs.bdcdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XX省XX市XX县XX街`
   - 说明：Real estate address. Special electronic invoice types - Real estate leasing services are mandatory. Format:
     Province, city, district, and detailed address

113. `data.einvoiceApplyList.bdcxsTspzs.zlqq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-03-22 12:12:12`
   - 说明：Starting from the lease date, special electronic tickets for real estate leasing services must be transmitted.
     Format: yyyy MM dd HH: mm: ss Example: March 22, 2023.

114. `data.einvoiceApplyList.bdcxsTspzs.zlqz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-03-22 12:12:12`
   - 说明：Lease end date (Special ticket type for real estate leasing services - mandatory). Format: yyyy-MM-dd
     HH:mm:ss. Example: 2023-03-22 12:12:12.

115. `data.einvoiceApplyList.bdcxsTspzs.kdsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Cross city symbol. Special types of digital electronic tickets - essential for real estate leasing services
     and real estate sales. Enumeration Y: Yes; N: No, no

116. `data.einvoiceApplyList.bdcxsTspzs.cxrxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Traveler Sequence Number

117. `data.einvoiceApplyList.bdcxsTspzs.cqzsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Property certificate number. Special tickets for real estate leasing and sales are required.

118. `data.einvoiceApplyList.bdcxsTspzs.mjdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：area unit. Special tickets for real estate leasing and sales are required. The values are: square kilometers,
     square meters, hectares, acres hm²、km²、m²、 Meter (used for railway lines and pipelines, etc.)

119. `data.einvoiceApplyList.bdcxsTspzs.cph`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：license plate number. Real estate leasing for special types of digital and electronic tickets.

120. `data.einvoiceApplyList.bdcxsTspzs.xh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Detail Serial Number

121. `data.einvoiceApplyList.bdcxsTspzs.fymx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Fee Detail

122. `data.einvoiceApplyList.bdcxsTspzs.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Item Quantity

123. `data.einvoiceApplyList.bdcxsTspzs.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Unit

124. `data.einvoiceApplyList.bdcxsTspzs.je`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Amount

125. `data.einvoiceApplyList.bdcxsTspzs.sl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - VAT Tax Rate / Levy Rate

126. `data.einvoiceApplyList.bdcxsTspzs.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Tax Amount

127. `data.einvoiceApplyList.bdcxsTspzs.ylfwgbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Medical Service Standard Code

128. `data.einvoiceApplyList.bdcxsTspzs.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Remark

129. `data.einvoiceApplyList.cepzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：List of Voucher Information for Differential Taxation - Differential Invoicing

130. `data.einvoiceApplyList.cepzs.xh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：SN

131. `data.einvoiceApplyList.cepzs.pzlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Voucher Type, 01 Fully Digitalized E-invoice, 02 VAT Special Invoice, 03 VAT Normal Invoice, 04 Business Tax
     Invoice, 05 Financial Bill, 06 Court Judgment, 07 Deed Tax Payment Voucher, 08 Other Invoice Types, 09 Other
     Deduction Vouchers

132. `data.einvoiceApplyList.cepzs.fphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Fully Digitized Electronic Invoice Number

133. `data.einvoiceApplyList.cepzs.fpdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Non-Fully Digitized Electronic Invoice Code

134. `data.einvoiceApplyList.cepzs.zzfphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Non-Fully Digitized Electronic Invoice Number

135. `data.einvoiceApplyList.cepzs.pzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Voucher Number

136. `data.einvoiceApplyList.cepzs.kjrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Date, format as: yyyy-MM-dd

137. `data.einvoiceApplyList.cepzs.hjje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Total Amount

138. `data.einvoiceApplyList.cepzs.kce`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Deduction Amount

139. `data.einvoiceApplyList.cepzs.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Difference Voucher Remarks

140. `data.einvoiceApplyList.cepzs.ly`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Input methods, value range as follows: Manual input, Checkbox input, Template input

141. `data.einvoiceApplyList.cepzs.bckcje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Amount Deducted This Time

142. `data.einvoiceApplyList.cepzs.pzhjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total Voucher Amount

143. `data.einvoiceApplyList.mqkfrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Calorific value per kilogram of coal Fully Digitalized E-invoice coal category field. This field is mandatory
     when the tax-exclusive amount exceeds ten million.

144. `data.einvoiceApplyList.gjql`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Dry Basis Total Sulfur Fully Digitalized E-invoice coal category field. This field is mandatory when the
     tax-exclusive amount exceeds ten million.

145. `data.einvoiceApplyList.gzwhjhff`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Dry Ash-Free Volatile Matter Fully Digitalized E-invoice Coal Category Field. This field is mandatory when the
     tax-excluded amount exceeds ten million.

146. `data.einvoiceApplyList.ticketNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：13-digit electronic ticket number Issuing special ticket types - electronic itinerary this field is mandatory

147. `data.einvoiceApplyList.buyerType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Type of Ticket Purchaser 0: Enterprise 1: Government or Public Institution 2: Individual 3: Other; For issuing
     special ticket types - electronic itinerary, this field is mandatory

148. `data.einvoiceApplyList.fareAmount`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Price Adjustment

149. `data.einvoiceApplyList.orderNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Enterprise Ticket Order Number

150. `data.einvoiceApplyList.userName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Username

151. `data.einvoiceApplyList.gpCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：GP Number

152. `data.einvoiceApplyList.passengerName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Passenger Name

153. `data.einvoiceApplyList.passengerIdnum`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Passenger ID Number/Passport Number

154. `data.einvoiceApplyList.endorsements`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Endorsement

155. `data.einvoiceApplyList.office`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Issuing Office Number

156. `data.einvoiceApplyList.issuedBy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Issuing Unit

157. `data.einvoiceApplyList.iata`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：IATA Number

158. `data.einvoiceApplyList.pnr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：PNR Number

159. `data.einvoiceApplyList.ticketInformation`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Air Ticket Face Information Prompt

160. `data.einvoiceApplyList.insurance`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Insurance Information

161. `data.einvoiceApplyList.electronicTicketType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket Type 0: Domestic 1: International

162. `data.einvoiceApplyList.verifyCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Verification Code

163. `data.einvoiceApplyList.overdueFlag`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Overdue Flag true: Overdue false: Not Overdue

164. `data.einvoiceApplyList.lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Source Type

165. `data.einvoiceApplyList.define`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{            "Characteristic key":"Characteristic value example Optional"     },`
   - 说明：Custom Characteristic Item

166. `data.einvoiceApplyList.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Details Pending Invoicing

167. `data.einvoiceApplyList.items.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Line Number Optional Required when discount is applied

168. `data.einvoiceApplyList.items.zkhhh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Discount Line Number  Optional: Required if there is a discount

169. `data.einvoiceApplyList.items.fphxz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Line Nature  
     0 Normal Line  
     1 Discount Line  
     2 Discounted Line

170. `data.einvoiceApplyList.items.xmbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project Code If the Project Name is empty, the Product File (Material Creation) in iuap will be matched based
     on the Project Code.

171. `data.einvoiceApplyList.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Project Name Fully Digitalized E-invoice: 300 bytes / 150 Chinese characters; Tax Control Invoice: 80 bytes /
     40 Chinese characters

172. `data.einvoiceApplyList.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Product Code Tax Category Code

173. `data.einvoiceApplyList.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specification

174. `data.einvoiceApplyList.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Unit

175. `data.einvoiceApplyList.items.xmsl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Item Quantity

176. `data.einvoiceApplyList.items.xmdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project unit price refers to the tax-exclusive unit price. When the project unit price is empty, it is
     recalculated based on the project amount. No calculation is performed when it is not empty.

177. `data.einvoiceApplyList.items.xmhsdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project price including tax When the project price is empty, it is recalculated based on the project amount.
     If not empty, no calculation is performed.

178. `data.einvoiceApplyList.items.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Project amount is the amount excluding tax. If the project amount is empty, it is recalculated based on the
     project total amount including tax. No calculation is performed if it is not empty.

179. `data.einvoiceApplyList.items.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Item Amount Including Tax

180. `data.einvoiceApplyList.items.sl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Rate

181. `data.einvoiceApplyList.items.se`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Amount

182. `data.einvoiceApplyList.items.kce`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Deduction Amount

183. `data.einvoiceApplyList.items.zxbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Self-coding

184. `data.einvoiceApplyList.items.yhzcbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Sales Discount Indicator: 0: Not Used, 1: Used

185. `data.einvoiceApplyList.items.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Rate Identifier: Blank: Non-zero rate, 0: Export tax rebate, 1: Tax exempt, 2: Not levied, 3: Normal zero
     rate

186. `data.einvoiceApplyList.items.zzstsgl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Special VAT Management

187. `data.einvoiceApplyList.items.detailMotor`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Detail Identifier

188. `data.einvoiceApplyList.items.detailMotor.cqzsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Property Certificate / Real Estate Ownership Certificate Number

189. `data.einvoiceApplyList.items.detailMotor.jzfwfsd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Place of Construction Service Provision

190. `data.einvoiceApplyList.items.detailMotor.jzxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Construction Project Name

191. `data.einvoiceApplyList.items.detailMotor.cd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Place of Origin. Mandatory for motor vehicle invoices.

192. `data.einvoiceApplyList.items.detailMotor.cjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Vehicle identification number. Required for motor vehicle invoices.

193. `data.einvoiceApplyList.items.detailMotor.cllx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Vehicle type. Mandatory for motor vehicle invoices.

194. `data.einvoiceApplyList.items.detailMotor.cpxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Brand and model. Motor vehicle invoice is required.

195. `data.einvoiceApplyList.items.detailMotor.scqymc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Name of the manufacturing enterprise. The unified invoice for motor vehicles must be transmitted.

196. `data.einvoiceApplyList.items.detailMotor.sfzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Id Number.

197. `data.einvoiceApplyList.items.detailMotor.hgzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Certificate of conformity number. Unified invoice for motor vehicles, imported vehicles must be empty.

198. `data.einvoiceApplyList.items.detailMotor.jkzmsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Import certificate number. Unified invoice for motor vehicles, domestic vehicles must be empty.

199. `data.einvoiceApplyList.items.detailMotor.sjdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Inspection certificate number. Unified invoice for motor vehicles.

200. `data.einvoiceApplyList.items.detailMotor.fdjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Engine number. Unified invoice for motor vehicles, required.

201. `data.einvoiceApplyList.items.detailMotor.dunwei`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tonnage. Unified invoice for motor vehicles.

202. `data.einvoiceApplyList.items.detailMotor.xcrs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Limited number of passengers. Unified invoice for motor vehicles.

203. `data.einvoiceApplyList.items.detailMotor.jdctzclsbdhuuid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Vehicle identification uuid for motor vehicles. Unified invoice for motor vehicles.

204. `data.einvoiceApplyList.items.detailMotor.wspzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax payment voucher number. Unified invoice for motor vehicles.

205. `data.einvoiceApplyList.items.detailMotor.xfdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Selling unit. Used car invoice.

206. `data.einvoiceApplyList.items.detailMotor.xfhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's number. Used car invoice.

207. `data.einvoiceApplyList.items.detailMotor.xfdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's address. Used car invoice.

208. `data.einvoiceApplyList.items.detailMotor.xfdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Sales phone number. Used car invoice.

209. `data.einvoiceApplyList.items.detailMotor.cpzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Vehicle license plate number. Used car invoice.

210. `data.einvoiceApplyList.items.detailMotor.djzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Registration certificate number. Used car invoice

211. `data.einvoiceApplyList.items.detailMotor.cgsmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Name of Vehicle Administration Office. Used car invoice.

212. `data.einvoiceApplyList.items.detailMotor.gfdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer's address. Used car invoice.

213. `data.einvoiceApplyList.items.detailMotor.gfdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer's phone number. Used car invoice.

214. `data.einvoiceApplyList.items.detailMotor.saleNaturalPersonId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's natural person identification. Enumeration values: Y, N

215. `data.einvoiceApplyList.items.detailMotor.saleNationalityCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Nationality code of the seller. Used for second-hand cars.

216. `data.einvoiceApplyList.items.detailMotor.saleIdType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's (vendor's) identification type. Used car invoice.

217. `data.einvoiceApplyList.items.detailMotor.saleIdNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's identification number. Used car invoice.

218. `data.einvoiceApplyList.items.detailMotor.mtzldm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Coal type code. 0100: Government guarantees coal supply; 0200: Changxie Coal; 0300: Market coal. Just pass the
     corresponding serial number.

219. `data.einvoiceApplyList.items.detailMotor.mtzldmxy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Coal type code agreement. If mtzldm is 0200, it is required. Subordinate agreement number, 0201: The agreement
     period is less than six months; 0202: The agreement period is between six months and one year; 0203: The
     agreement period is between one to two years; 0204: The agreement period is over two years.

220. `data.einvoiceApplyList.items.detailMotor.fymx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Fee Detail

221. `data.einvoiceApplyList.items.detailMotor.ylfwgbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Medical Service Standard Code

222. `data.einvoiceApplyList.items.detailMotor.qt`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Other

223. `data.einvoiceApplyList.items.detailMotor.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specific Medical Business - Remark

224. `data.einvoiceApplyList.items.define`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{                "CharacteristicKey":"Example of Characteristic Value Optional"         	}`
   - 说明：Characteristic Value

225. `data.emailConfigList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Email Delivery Information

226. `data.emailConfigList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the one in the above einvoiceApplyList.

227. `data.emailConfigList.address`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Email

228. `data.smsConfigList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：SMS Delivery Information

229. `data.smsConfigList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the einvoiceApplyList above.

230. `data.smsConfigList.address`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Mobile No.

231. `data.urlConfigList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：URL Delivery Information

232. `data.urlConfigList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the one in the above einvoiceApplyList.

233. `data.urlConfigList.url`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Callback Address

234. `data.auditReturnConfigs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Return Address Information

235. `data.auditReturnConfigs.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the one in the above einvoiceApplyList.

236. `data.auditReturnConfigs.url`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Return Address

237. `data.autoAudit`
   - 类型：boolean
   - 数组：否
   - 必填：否
   - 说明：Automatic review, meaning invoicing is done directly on the invoice platform without manual confirmation.  
     false: No automatic review, manual confirmation is required. If not provided, the default is true.

## 请求示例

```text
Url: /0000L6YQ8AVLFUZPXD0000/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray?access_token=访问令牌
Body: {
	"data": {
		"einvoiceApplyList": [
			{
				"orgcode": "",
				"lyid": "",
				"fpqqlsh": "",
				"fplx": "",
				"sdLc": "",
				"tspz": "",
				"zsfs": "",
				"xsfNsrsbh": "",
				"xsfMc": "",
				"xsfDzdh": "北京市XX 83869965",
				"xsfDz": "北京市XX",
				"xsfDh": "83869965",
				"xsfYh": "招商银行",
				"xsfZh": "9645555111254",
				"gmfNsrsbh": "",
				"gmfMc": "",
				"gmfDzdh": "",
				"gmfYhzh": "",
				"gmfDz": "北京市XX",
				"gmfDh": "01055587444",
				"gmfYh": "招商银行",
				"gmfZh": "596874512",
				"zrrbs": "Y",
				"zjlx": "101",
				"zjhm": "123123123",
				"guoji": "004",
				"einvoiceShowGxfYhZh": "0",
				"einvoiceShowSkrShr": "0",
				"einvoiceShowGxfDzDh": "0",
				"dfgtgmbz": "Y",
				"kpr": "",
				"skr": "",
				"fhr": "",
				"hjje": 0,
				"hjse": 0,
				"jshj": 0,
				"bz": "",
				"allElcUserName": "AA#@#",
				"allElcPassWord": "ERCFCAC",
				"slsm": "",
				"zdybz": "",
				"projectCode": "",
				"acountOrgCode": "",
				"wbsCode": "",
				"lydjh": "",
				"bmbBbh": "",
				"wxorderid": "",
				"wxappid": "",
				"wxauthid": "",
				"sgbz": "",
				"cpyqylb": "",
				"tdzzsxmbh": "",
				"bdcdz": "",
				"zlqq": "",
				"zlqz": "",
				"kdsbz": "",
				"kqysssxbgglbm": "",
				"tspzs": {
					"ysmxxh": "",
					"ysgjzl": "",
					"ysgjph": "",
					"qyd": "",
					"ddd": "",
					"yshwmc": "",
					"cxrxh": "",
					"cxr": "",
					"chuxrq": "",
					"cxrzjlxDm": "",
					"sfzjhm": "",
					"cfd": "",
					"lkddd": "",
					"zwdj": "",
					"jtgjlxDm": ""
				},
				"bdcxsTspzs": {
					"ysmxxh": "",
					"ysgjzl": "",
					"ysgjph": "",
					"qyd": "",
					"ddd": "",
					"yshwmc": "",
					"cxrxh": "",
					"cxr": "",
					"chuxrq": "",
					"cxrzjlxDm": "",
					"sfzjhm": "",
					"cfd": "",
					"lkddd": "",
					"zwdj": "",
					"jtgjlxDm": ""
				},
				"cepzs": {
					"xh": "",
					"pzlx": "",
					"fphm": "",
					"fpdm": "",
					"zzfphm": "",
					"pzhm": "",
					"kjrq": "",
					"hjje": "",
					"kce": "",
					"bz": "",
					"ly": "",
					"bckcje": 0,
					"pzhjje": 0
				},
				"mqkfrl": "",
				"gjql": "",
				"gzwhjhff": "",
				"ticketNumber": "",
				"buyerType": "",
				"fareAmount": "",
				"orderNumber": "",
				"userName": "",
				"gpCode": "",
				"passengerName": "",
				"passengerIdnum": "",
				"endorsements": "",
				"office": "",
				"issuedBy": "",
				"iata": "",
				"pnr": "",
				"ticketInformation": "",
				"insurance": "",
				"electronicTicketType": "",
				"verifyCode": "",
				"overdueFlag": "",
				"lylx": "",
				"define": "{            \"特征key\":\"特征值示例 选填\"     },",
				"items": [
					{
						"hh": "",
						"zkhhh": "",
						"fphxz": "",
						"xmbm": "",
						"xmmc": "",
						"spbm": "",
						"ggxh": "",
						"dw": "",
						"xmsl": "",
						"xmdj": "",
						"xmhsdj": "",
						"xmje": 0,
						"xmjshj": 0,
						"sl": "",
						"se": "",
						"kce": "",
						"zxbm": "",
						"yhzcbs": "",
						"lslbs": "",
						"zzstsgl": "",
						"detailMotor": {
							"cqzsbh": "",
							"jzfwfsd": "",
							"jzxmmc": ""
						},
						"define": {
							"特征key": "特征值示例 选填"
						}
					}
				]
			}
		],
		"emailConfigList": [
			{
				"fpqqlsh": "",
				"address": ""
			}
		],
		"smsConfigList": [
			{
				"fpqqlsh": "",
				"address": ""
			}
		],
		"urlConfigList": [
			{
				"fpqqlsh": "",
				"url": ""
			}
		],
		"auditReturnConfigs": [
			{
				"fpqqlsh": "",
				"url": ""
			}
		],
		"autoAudit": true
	}
}
```

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`200`
   - 说明：Return Value Code

2. `data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Response Information

3. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`success`
   - 说明：Information Description

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1002 |  |  |
| 9999 |  |  |

