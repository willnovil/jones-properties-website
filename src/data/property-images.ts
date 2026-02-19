// Property images scraped from jonesproperties.biz
// Maps addresses to Shopify CDN image URLs

export interface PropertyImageEntry {
  name: string;
  address: string;
  image: string;
  type: "apartment" | "house" | "commercial";
  shopifyUrl: string;
}

export const propertyImages: PropertyImageEntry[] = [
  // === APARTMENTS ===
  { name: "360 Worth St", address: "360 Worth St", image: "https://jonesproperties.biz/cdn/shop/files/1_06ce0fe4-5986-4d11-b25c-378f647eaa42.jpg?v=1732066849", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/360-worth-st" },
  { name: "240 Breckenridge Dr NW #138", address: "240 Breckenridge Dr NW", image: "https://jonesproperties.biz/cdn/shop/files/11.png?v=1769720472", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/breckenridge" },
  { name: "580-590 17th St NW", address: "580-590 17th Street NW", image: "https://jonesproperties.biz/cdn/shop/products/IMG_9402.jpg?v=1527182692", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/580-590-17th-st-nw" },
  { name: "399 Central Ave NW #8", address: "385-399 Central Ave NW", image: "https://jonesproperties.biz/cdn/shop/products/385-399CentralAve.jpg?v=1527182679", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/385-central-cleveland" },
  { name: "1270 South Ocoee St", address: "1270 South Ocoee St", image: "https://jonesproperties.biz/cdn/shop/products/20230309_111524.jpg?v=1680640152", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/1270-south-ocoee-st" },
  { name: "2900 Villa Drive", address: "2900 Villa Drive", image: "https://jonesproperties.biz/cdn/shop/files/1_ec30c593-de59-4265-a78b-cf4795499aca.jpg?v=1764702145", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/2900-villa-drive" },
  { name: "1736 Weeks Crest Circle", address: "1736 Weeks Crest Circle", image: "https://jonesproperties.biz/cdn/shop/files/1_28766bd0-b306-410d-bc16-8173471b6bec.jpg?v=1692216616", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/1726-weeks-crest-circle" },
  { name: "Vance Village", address: "Vance Village", image: "https://jonesproperties.biz/cdn/shop/products/20211229_145928.jpg?v=1640813928", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/vance-village-condos" },
  { name: "163 Centenary Ave NW", address: "163 Centenary Place NW", image: "https://jonesproperties.biz/cdn/shop/products/163Centernary.jpg?v=1527182651", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/163-centenary-cleveland" },
  { name: "2505-2535 Thompson Lane NW", address: "2505-2535 Thompson Lane NW", image: "https://jonesproperties.biz/cdn/shop/products/IMG_9621.jpg?v=1527182672", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/2505-thompson-cleveland" },
  { name: "500 Stuart Road NE", address: "500 Stuart Road NE", image: "https://jonesproperties.biz/cdn/shop/products/IMG_2104.jpg?v=1527182686", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/500-stuart-road" },
  { name: "2108 B Georgetown Rd", address: "2108 Georgetown Rd", image: "https://jonesproperties.biz/cdn/shop/files/1_a36e821d-c2b5-4d62-a8e9-12ed45336676.jpg?v=1726171398", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/studio-apartment-for-rent" },
  { name: "2105 Georgetown Rd NW", address: "2105 Georgetown Rd NW", image: "https://jonesproperties.biz/cdn/shop/products/IMG_9580.jpg?v=1527182658", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/2105-georgetown-cleveland" },
  { name: "3285 Clearwater Drive", address: "3285 Clearwater Drive", image: "https://jonesproperties.biz/cdn/shop/files/1_feaca73f-d8ea-49b4-b368-1ce458592c65.jpg?v=1705940573", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/3285-clearwater-drive" },
  { name: "555 20th St NW", address: "555 20th Street NW", image: "https://jonesproperties.biz/cdn/shop/products/55520th-5.jpg?v=1527182690", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/555-20th-cleveland" },
  { name: "900 Stratford Circle NW", address: "900 Stratford Circle NW", image: "https://jonesproperties.biz/cdn/shop/products/500StratfordCr-2.jpg?v=1527182694", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/900-stratford-cleveland" },
  { name: "4911-4929 Frontage Rd NW", address: "4911-4929 Frontage Rd NW", image: "https://jonesproperties.biz/cdn/shop/products/4911Frontage-2.jpg?v=1527182686", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/4911-frontage-cleveland" },
  { name: "143 Centenary Ave NW", address: "143 Centenary Place NW", image: "https://jonesproperties.biz/cdn/shop/products/143Centernary-5.jpg?v=1527182650", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/143-centenary-cleveland" },
  { name: "321-323 17th St", address: "321/323 17th Street", image: "https://jonesproperties.biz/cdn/shop/products/IMG_2075.jpg?v=1527182677", type: "apartment", shopifyUrl: "https://jonesproperties.biz/products/1601-17th-cleveland" },

  // === HOUSES ===
  { name: "1923 Harle Ave NW", address: "1923 Harle Ave NW", image: "https://jonesproperties.biz/cdn/shop/products/HouseFront.webp?v=1646760038", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1923-hare-ave-nw" },
  { name: "770 13th St", address: "770 13th St", image: "https://jonesproperties.biz/cdn/shop/products/1_fb8a29c6-62d5-418b-b87a-e7750f40ef3f.jpg?v=1537292445", type: "house", shopifyUrl: "https://jonesproperties.biz/products/770-13th-st" },
  { name: "463 8th St NW", address: "463 8th St NW", image: "https://jonesproperties.biz/cdn/shop/files/1_df389f79-399e-4e03-845d-ac9e444d2a22.jpg?v=1769720773", type: "house", shopifyUrl: "https://jonesproperties.biz/products/463-8th-cleveland" },
  { name: "106 Buckeye Lane NW", address: "106 Buckeye Lane NW", image: "https://jonesproperties.biz/cdn/shop/products/106Buckeye.jpg?v=1527182644", type: "house", shopifyUrl: "https://jonesproperties.biz/products/106-buckeye-cleveland" },
  { name: "373 15th Street NW", address: "373 15th Street NW", image: "https://jonesproperties.biz/cdn/shop/products/FrontPicture.jpg?v=1646762088", type: "house", shopifyUrl: "https://jonesproperties.biz/products/373-15th-street" },
  { name: "1060 East Street SE", address: "1060 East Street SE", image: "https://jonesproperties.biz/cdn/shop/files/FB_IMG_1759937609696.jpg?v=1759950146", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1060-east-street-se-cleveland-tn-37311" },
  { name: "1208 Fairway Dr SW", address: "1208 Fairway Dr SW", image: "https://jonesproperties.biz/cdn/shop/products/1208-Fairway431_b3e6f473-fd28-4425-8357-98516bd56947.jpg?v=1527182647", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1208-fairway-cleveland" },
  { name: "1203 Fairway Dr", address: "1203 Fairway Dr SW", image: "https://jonesproperties.biz/cdn/shop/products/1_56bb7ed9-7f14-411c-aa50-671893a66632.jpg?v=1527182646", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1203-fairway-dr" },
  { name: "461 8th St NW", address: "461 8th St NW", image: "https://jonesproperties.biz/cdn/shop/products/4618th.jpg?v=1527182684", type: "house", shopifyUrl: "https://jonesproperties.biz/products/461-8th-cleveland" },
  { name: "240 Oak St", address: "240 Oak St", image: "https://jonesproperties.biz/cdn/shop/files/Frontofhouse_599d7120-5132-44db-a581-49747b5b7d88.png?v=1751295816", type: "house", shopifyUrl: "https://jonesproperties.biz/products/240-oak-st" },
  { name: "643 Johnston Ave NW", address: "643 Johnston Ave NW", image: "https://jonesproperties.biz/cdn/shop/products/Johnson476-1.jpg?v=1527182692", type: "house", shopifyUrl: "https://jonesproperties.biz/products/643-johnson-cleveland" },
  { name: "137 Vermont Dr NW", address: "137 Vermont Dr NW", image: "https://jonesproperties.biz/cdn/shop/products/IMG_9469.jpg?v=1527182649", type: "house", shopifyUrl: "https://jonesproperties.biz/products/137-vermont-cleveland" },
  { name: "432 Lake St", address: "432 Lake St", image: "https://jonesproperties.biz/cdn/shop/files/1a_f4436d66-03bd-4249-bd46-1a702370b710.jpg?v=1687294223", type: "house", shopifyUrl: "https://jonesproperties.biz/products/432-lake-st" },
  { name: "2203 Harris Circle NW", address: "2203 Harris Circle NW", image: "https://jonesproperties.biz/cdn/shop/products/2203_HarrisCircle369.jpg?v=1527182662", type: "house", shopifyUrl: "https://jonesproperties.biz/products/2203-harris-circle-cleveland" },
  { name: "1204 14th Street", address: "1204 14th Street", image: "https://jonesproperties.biz/cdn/shop/products/1_916fb273-50d4-45d6-876f-47ca78a01a25.jpg?v=1527182647", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1204-14th-st-se-cleveland-tn-37311" },
  { name: "2005 Brown Ave", address: "2005 Brown Ave", image: "https://jonesproperties.biz/cdn/shop/files/1.jpg?v=1726171689", type: "house", shopifyUrl: "https://jonesproperties.biz/products/2005-brown-ave" },
  { name: "212 Winding Creek Cir NW", address: "212 Winding Creek Cir NW", image: "https://jonesproperties.biz/cdn/shop/products/212WindingCir-1.jpg?v=1527182659", type: "house", shopifyUrl: "https://jonesproperties.biz/products/212-winding-creek-cleveland" },
  { name: "2214 Brentwood Dr NW", address: "2214 Brentwood Dr NW", image: "https://jonesproperties.biz/cdn/shop/products/2214-Brentwood-Dr406.jpg?v=1598283320", type: "house", shopifyUrl: "https://jonesproperties.biz/products/2214-brentwood-cleveland" },
  { name: "239 Saddle Creek Dr NW", address: "239 Saddle Creek Dr NW", image: "https://jonesproperties.biz/cdn/shop/products/239SaddleCreak-2.jpg?v=1527182665", type: "house", shopifyUrl: "https://jonesproperties.biz/products/239-saddle-cleveland" },
  { name: "935 Beard Cir SE", address: "935 Beard Cir SE", image: "https://jonesproperties.biz/cdn/shop/products/1_68dbc9d2-35de-46ff-a8d7-18ce89a0edbc.jpg?v=1538101361", type: "house", shopifyUrl: "https://jonesproperties.biz/products/935-beard-cleveland" },
  { name: "1915 Baugh St NE", address: "1915 Baugh St NE", image: "https://jonesproperties.biz/cdn/shop/products/2_f58d9a6b-fc4a-4ff1-a011-0c0e429ddad0.JPG?v=1527182655", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1915-baugh-street" },
  { name: "179 Vermont Circle NW", address: "179 Vermont Circle NW", image: "https://jonesproperties.biz/cdn/shop/products/179Vermont-3.jpg?v=1527182652", type: "house", shopifyUrl: "https://jonesproperties.biz/products/179-vermont-cleveland" },
  { name: "575 20th St NW", address: "575 20th St NW", image: "https://jonesproperties.biz/cdn/shop/products/20230307_161915.jpg?v=1678227668", type: "house", shopifyUrl: "https://jonesproperties.biz/products/575-20th-st" },
  { name: "2503 Highland Dr NE", address: "2503 Highland Dr NE", image: "https://jonesproperties.biz/cdn/shop/products/2503_Highland-Dr.509.jpg?v=1527182671", type: "house", shopifyUrl: "https://jonesproperties.biz/products/2503-highland-cleveland" },
  { name: "501 Sycamore Drive NE", address: "501 Sycamore Drive NE", image: "https://jonesproperties.biz/cdn/shop/products/1_11121f06-aa99-4ae3-b651-275c1574a7e9.jpg?v=1527182687", type: "house", shopifyUrl: "https://jonesproperties.biz/products/501-sycamore-drive-ne" },
  { name: "1860 Harle Ave", address: "1860 Harle Ave", image: "https://jonesproperties.biz/cdn/shop/products/Front_Ext.jpg?v=1569288944", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1860-harle-ave" },
  { name: "308 Vermont Dr NW", address: "308 Vermont Dr NW", image: "https://jonesproperties.biz/cdn/shop/products/308Vermont-4.jpg?v=1527182676", type: "house", shopifyUrl: "https://jonesproperties.biz/products/308-vermont-cleveland" },
  { name: "1100 Phillips St SW", address: "1100 Phillips St SW", image: "https://jonesproperties.biz/cdn/shop/products/1_ee7d9b3d-e502-4f58-9052-031d847b3e05.jpg?v=1657118083", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1100-phillips-st-sw" },
  { name: "128 Buckeye Lane NW", address: "128 Buckeye Lane NW", image: "https://jonesproperties.biz/cdn/shop/products/2_79af22c4-c104-40a3-b156-fd9afc9892ca.jpg?v=1650897294", type: "house", shopifyUrl: "https://jonesproperties.biz/products/128-buckeye-cleveland" },
  { name: "3880 Adkisson Dr NW", address: "3880 Adkisson Dr NW", image: "https://jonesproperties.biz/cdn/shop/products/1_042e6490-cc02-448a-a73b-3e270857a87c.jpg?v=1527182680", type: "house", shopifyUrl: "https://jonesproperties.biz/products/3880-adkisson-dr-nw" },
  { name: "240 Winding Creek Cir", address: "240 Winding Creek Cir", image: "https://jonesproperties.biz/cdn/shop/products/1_4a8248d8-6d8c-4c76-9e2e-cb6dcff9d14b.jpg?v=1642629548", type: "house", shopifyUrl: "https://jonesproperties.biz/products/240-winding-creek-cleveland" },
  { name: "4941 Treemont Circle", address: "4941 Treemont Circle", image: "https://jonesproperties.biz/cdn/shop/products/1_ec714eea-65d0-4df6-bb80-ef354c45d927.jpg?v=1623179314", type: "house", shopifyUrl: "https://jonesproperties.biz/products/4941-treemont-circle" },
  { name: "1730 Brown Ave", address: "1730 Brown Ave", image: "https://jonesproperties.biz/cdn/shop/products/1730Brown.jpg?v=1527182652", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1730-brown-cleveland" },
  { name: "801 Water St NE", address: "801 Water St NE", image: "https://jonesproperties.biz/cdn/shop/products/1_06f5888e-8ffb-46a3-8fe0-50f9888fc735.jpg?v=1527182693", type: "house", shopifyUrl: "https://jonesproperties.biz/products/801-water-cleveland" },
  { name: "486 Marina Dr NW", address: "486 Marina Dr NW", image: "https://jonesproperties.biz/cdn/shop/products/1.jpg?v=1527182685", type: "house", shopifyUrl: "https://jonesproperties.biz/products/486-marina-dr-nw" },
  { name: "210 King Den Drive", address: "210 King Den Drive", image: "https://jonesproperties.biz/cdn/shop/products/1_afa89b02-e122-4dfb-bda3-387614f8b3fd.jpg?v=1595433625", type: "house", shopifyUrl: "https://jonesproperties.biz/products/210-king-den-drive" },
  { name: "188 Mapleton Ridge Dr NW", address: "188 Mapleton Ridge Dr NW", image: "https://jonesproperties.biz/cdn/shop/products/188_Mapleton350.jpg?v=1527182654", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1880-mapleton-cleveland" },
  { name: "186 Old Kile Road", address: "186 Old Kile Road", image: "https://jonesproperties.biz/cdn/shop/products/1_fea93999-fa69-4597-9c66-5c9ab70d54c8.jpg?v=1527182654", type: "house", shopifyUrl: "https://jonesproperties.biz/products/186-old-kile-lake-cleveland" },
  { name: "354 Vermont Dr NW", address: "354 Vermont Dr NW", image: "https://jonesproperties.biz/cdn/shop/products/354Vermont.jpg?v=1527182678", type: "house", shopifyUrl: "https://jonesproperties.biz/products/354-vermont-cleveland" },
  { name: "555 56th St NW", address: "555 56th St NW", image: "https://jonesproperties.biz/cdn/shop/products/1a.jpg?v=1527182690", type: "house", shopifyUrl: "https://jonesproperties.biz/products/555-56th-st-nw-cleveland-tn-37312" },
  { name: "2010 Central St NW", address: "2010 Central St NW", image: "https://jonesproperties.biz/cdn/shop/products/1_751c70de-7006-492a-9e7b-ba1bba22b8ad.jpg?v=1527182657", type: "house", shopifyUrl: "https://jonesproperties.biz/products/2010-central-st-nw" },
  { name: "440 Lake St NW", address: "440 Lake St NW", image: "https://jonesproperties.biz/cdn/shop/products/1_8b8f5e86-a70a-4701-8b65-39a583b17ae7.jpg?v=1527182683", type: "house", shopifyUrl: "https://jonesproperties.biz/products/coming-soon-440-lake-st-nw-cleveland-tn-37312" },
  { name: "323 Vermont Drive NW", address: "323 Vermont Drive NW", image: "https://jonesproperties.biz/cdn/shop/products/1_799ec142-33eb-4a1c-8e03-926fc1031f01.jpg?v=1527182678", type: "house", shopifyUrl: "https://jonesproperties.biz/products/323-vermont-drive-nw" },
  { name: "1235 21st St SE", address: "1235 21St Street", image: "https://jonesproperties.biz/cdn/shop/products/IMG_2087.jpg?v=1527182648", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1235-21st-cleveland" },
  { name: "1920 Maple St", address: "1920 Maple St", image: "https://jonesproperties.biz/cdn/shop/products/1920Maple-3.jpg?v=1527182655", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1920-maple-cleveland" },
  { name: "223 14th St NW", address: "223 14th St", image: "https://jonesproperties.biz/cdn/shop/products/22314th.jpg?v=1527182663", type: "house", shopifyUrl: "https://jonesproperties.biz/products/223-14th-cleveland" },
  { name: "565 56th St", address: "565 56th St", image: "https://jonesproperties.biz/cdn/shop/products/IMG_2107.jpg?v=1527182691", type: "house", shopifyUrl: "https://jonesproperties.biz/products/565-56th-cleveland" },
  { name: "259 Saddle Creek Dr NW", address: "259 Saddle Creek Dr NW", image: "https://jonesproperties.biz/cdn/shop/products/259_SaddleCreek239.jpg?v=1527182673", type: "house", shopifyUrl: "https://jonesproperties.biz/products/259-saddle-cleveland" },
  { name: "2650 Dalton Pike SE", address: "2650 Dalton Pike SE", image: "https://jonesproperties.biz/cdn/shop/products/IMG_2090.jpg?v=1527182674", type: "house", shopifyUrl: "https://jonesproperties.biz/products/2650-dalton-cleveland" },
  { name: "7161 Mouse Creek Rd NW", address: "7161 Mouse Creek Rd NW", image: "https://jonesproperties.biz/cdn/shop/products/7161_Mouse-Creek-Rd.-NW473.jpg?v=1527182693", type: "house", shopifyUrl: "https://jonesproperties.biz/products/7161-mouse-creek-cleveland" },
  { name: "1103 Sweetbriar", address: "1103 Sweetbriar", image: "https://jonesproperties.biz/cdn/shop/products/1103SweetBriar-2.jpg?v=1527182645", type: "house", shopifyUrl: "https://jonesproperties.biz/products/1103-sweetbriar-cleveland" },

  // === COMMERCIAL ===
  { name: "170 Ocoee Street", address: "170 Ocoee Street", image: "https://jonesproperties.biz/cdn/shop/products/craigMiles-2.jpg?v=1527182651", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/170-ocoee-street" },
  { name: "225 2nd Street SE", address: "225 2nd Street SE", image: "https://jonesproperties.biz/cdn/shop/products/225_Second_St508.jpg?v=1527182664", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/225-2nd-street" },
  { name: "166 N. Ocoee", address: "166 N Ocoee", image: "https://jonesproperties.biz/cdn/shop/products/LawyerBuilding-5.jpg?v=1527182651", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/166-n-ocoee" },
  { name: "Prime Retail Space Downtown", address: "Downtown Cleveland", image: "https://jonesproperties.biz/cdn/shop/products/ScreenShot2021-08-25at1.28.39PM.png?v=1629912546", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/prime-retail-space-for-rent-in-downtown-cleveland" },
  { name: "258-266 Broad & Central Ave", address: "258-266 Broad St", image: "https://jonesproperties.biz/cdn/shop/products/258-266NBoardCt.jpg?v=1527182673", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/258-266-broad-central-ave" },
  { name: "301 Keith St SW", address: "301 Keith St SW", image: "https://jonesproperties.biz/cdn/shop/products/301Keith.jpg?v=1527182675", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/301-keith-st-sw" },
  { name: "Hardwick Field", address: "Hardwick Field", image: "https://jonesproperties.biz/cdn/shop/products/DJI_0013.jpg?v=1629917708", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/airport-converted-to-car-recondition-center" },
  { name: "2151 Keith Street", address: "2151 Keith Street", image: "https://jonesproperties.biz/cdn/shop/products/quiznos.jpg?v=1627307758", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/2151-keith-street" },
  { name: "205 2nd Street NW", address: "205 2nd Street NW", image: "https://jonesproperties.biz/cdn/shop/products/205-Second-St_front2.jpg?v=1527182657", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/205-2nd-street-nw" },
  { name: "220 1st Street", address: "220 1st Street", image: "https://jonesproperties.biz/cdn/shop/products/curves-1.jpg?v=1627307758", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/220-1st-street" },
  { name: "220 Ocoee", address: "220 Ocoee", image: "https://jonesproperties.biz/cdn/shop/products/220Ocoee-1.jpg?v=1527182661", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/220-ocoee" },
  { name: "537 W. Inman", address: "537 W Inman", image: "https://jonesproperties.biz/cdn/shop/products/537-539WInman-3.jpg?v=1527182689", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/537-w-inman" },
  { name: "215 2nd Street NW", address: "215 2nd Street NW", image: "https://jonesproperties.biz/cdn/shop/products/215_2nd_Street489.jpg?v=1527182660", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/215-2nd-street-nw" },
  { name: "Ramsey St Hangars", address: "Ramsey St", image: "https://jonesproperties.biz/cdn/shop/products/T1-T4Hanger484.jpg?v=1527182695", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/ramsey-st" },
  { name: "529 W. Inman", address: "529 W Inman", image: "https://jonesproperties.biz/cdn/shop/products/529WInman-3.jpg?v=1527182689", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/529-w-inman" },
  { name: "225 Keith Street", address: "225 Keith Street", image: "https://jonesproperties.biz/cdn/shop/products/225Keith-2.JPG?v=1527182664", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/225-keith-street" },
  { name: "653 W. Inman", address: "653 W Inman", image: "https://jonesproperties.biz/cdn/shop/products/653WInman-2.jpg?v=1527182693", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/653-w-inman" },
  { name: "2145 Keith St", address: "2145 Keith St", image: "https://jonesproperties.biz/cdn/shop/products/214Keith.jpg?v=1527182659", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/2145-keith-st" },
  { name: "527-b W. Inman (The Venue)", address: "527 W Inman", image: "https://jonesproperties.biz/cdn/shop/products/SGP-93.jpg?v=1527182688", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/527-b-w-inman" },
  { name: "260 North Ocoee St", address: "260 North Ocoee St", image: "", type: "commercial", shopifyUrl: "https://jonesproperties.biz/products/260-north-ocoee-st" },
];

// Normalize an address for fuzzy matching
function normalize(addr: string): string {
  return addr
    .toLowerCase()
    .replace(/[.,#]/g, "")
    .replace(/\b(street|st|drive|dr|avenue|ave|road|rd|circle|cir|lane|ln|place|pl|boulevard|blvd|court|ct|pike|way)\b/g, "")
    .replace(/\b(nw|ne|sw|se|north|south|east|west|n|s|e|w)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Extract the leading number from an address
function leadingNumber(addr: string): string {
  const match = addr.match(/^[\d-]+/);
  return match ? match[0] : "";
}

// Find the best matching image for a RentCafe property address
export function findPropertyImage(rentCafeAddress: string, rentCafeName: string): PropertyImageEntry | null {
  const normAddr = normalize(rentCafeAddress);
  const normName = normalize(rentCafeName);
  const addrNum = leadingNumber(rentCafeAddress);

  // Try exact normalized match first
  for (const entry of propertyImages) {
    if (normalize(entry.address) === normAddr || normalize(entry.name) === normAddr) {
      return entry;
    }
  }

  // Try matching on leading number + partial address
  if (addrNum) {
    for (const entry of propertyImages) {
      const entryNum = leadingNumber(entry.address) || leadingNumber(entry.name);
      if (entryNum === addrNum) {
        // Check if any significant word from one appears in the other
        const addrWords = normAddr.split(" ").filter((w) => w.length > 2);
        const entryWords = normalize(entry.address).split(" ").filter((w) => w.length > 2);
        const overlap = addrWords.some((w) => entryWords.includes(w));
        if (overlap) return entry;
      }
    }
  }

  // Try name match
  for (const entry of propertyImages) {
    if (normalize(entry.name) === normName) {
      return entry;
    }
  }

  return null;
}
