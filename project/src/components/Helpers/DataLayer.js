import clds from 'console-log-design-system';

const { makeComment }= clds

const getCurrTime = () => {
    return `
        ${new Date().getUTCFullYear()} 
        ${new Date().getUTCMonth()}
        ${new Date().getUTCDay()}_${new Date().toLocaleTimeString()}
    `
}

const dataLayerModel = {
    accessDate: `${getCurrTime()}`,
    lastAccessData: `${getCurrTime()}`,
    clicks: 0
}

let dataLayer  = dataLayerModel;
let dataLayerHistory = [];

const pushDataLayer = data => {
    data.lastAccessData= getCurrTime();
    data.tema = localStorage.setItem('dataLayer', JSON.stringify(data));
    dataLayer = getDataLayer();
    if (data.accessDate !== data.lastAccessData) {
        dataLayerHistory.unshift({...data});
    }
    return dataLayer;
}

const getDataLayer = (param = undefined, value = undefined) => {
    let dataObj = JSON.parse(localStorage.getItem('dataLayer'));
    if (param !== undefined && value !== undefined) {
        return  dataObj[`${param}`] = value;
    } else {
        return dataObj
    }
}

const dataLayerInit = () =>  {
    dataLayer = dataLayerModel;
    dataLayerHistory  = [];
    pushDataLayer(dataLayer);
    makeComment(
        'dataLayerInit', 
        [
            `Click: ${JSON.stringify(dataLayer.clicks, null, 1)}
            \n
            Created at ${JSON.stringify(dataLayer.lastAccessData, null, 1)}
            \n
            dataLayerHistory:`, `${JSON.stringify(dataLayerHistory, null, 1)}`
        ], 
        'info', 
        'sm', 
        'badgeInverted'
    );

}

const updateDataLayer = (key, value) => {
    let newVersion = getDataLayer();
    newVersion[key] = value;
    dataLayer = newVersion;
    pushDataLayer(newVersion);

    let dataLayerLog = dataLayerHistory
        .map(
            (logItem, logIndex) => `
            Click: ${dataLayer.clicks - logIndex} | 
            Updated at: ${logItem.lastAccessData} | 
            Created at: ${logItem.accessDate}\n`
        );
    
    makeComment(`
        updateDataLayer(${key},${value})`,
        [`Clicks: ${JSON.stringify(dataLayer.clicks, null, 1)}
        \n
        Updated at ${JSON.stringify(dataLayer.lastAccessData, null, 1)}
        \n
        dataLayerHistory:
        \n
        ${dataLayerLog.join('')}`],
        'important',
        'sm',
        'badgeInverted'
    );
  }
  
  export { dataLayerInit, updateDataLayer }