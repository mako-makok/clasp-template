function getProperties() {
    const properties = PropertiesService.getScriptProperties();
    const HOGE = properties.getProperty("HOGE");
    if (HOGE) {
        return {
            HOGE: HOGE,
        };
    }
    
    return null;
  }