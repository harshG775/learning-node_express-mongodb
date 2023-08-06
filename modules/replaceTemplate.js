module.exports =(tempCard,productJson) => {
    let output = tempCard.replace(/{%IMAGE%}/g,productJson.image)
    output = output.replace( /{%PRODUCTNAME%}/g ,productJson.productName)
    output = output.replace(/{%PRICE%}/g,productJson.price)
    output = output.replace(/{%FROM%}/g,productJson.from)
    output = output.replace(/{%NUTRIENTS%}/g,productJson.nutrients)
    output = output.replace(/{%QUANTITY%}/g,productJson.quantity)
    output = output.replace(/{%DESCRIPTION%}/g,productJson.description)
    output = output.replace(/{%ID%}/g,productJson.id);
    if (!productJson.organic){output = output.replace( /{%NOT_ORGANIC%}/g ,"not-organic")};
    return output
}