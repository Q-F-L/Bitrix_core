{"version":3,"sources":["grid.js"],"names":["BX","namespace","UI","AccessRights","options","this","renderTo","buttonPanel","ButtonPanel","layout","container","component","actionSave","actionDelete","actionLoad","mode","openPopupEvent","popupContainer","additionalSaveParams","loadParams","loader","timer","initData","userGroups","accessRights","isRequested","loadData","bindEvents","prototype","addCustomEvent","updateRole","bind","updateAccessRight","adjustButtonPanel","addUserGroup","addRoleColumn","removeRoleColumn","onGetEntityTypes","accessRightsSections","headSection","members","columns","fireEventReset","onCustomEvent","window","fireEventRefresh","getButtonPanel","showNotification","title","Notification","Center","notify","content","position","autoHideDelay","sendActionRequest","setTimeout","blockGrid","needReload","dataToSave","i","length","id","push","accessCodes","type","ajax","runComponentAction","data","parameters","then","reloadGrid","message","unBlockGrid","clearTimeout","getContainer","querySelector","classList","remove","deleteActionRequest","roleId","response","ACCESS_RIGHTS","USER_GROUPS","draw","offsetTop","getBoundingClientRect","top","add","style","height","self","getLoader","show","hide","loadLoaderExtension","Promise","resolve","Loader","loadExt","target","param","removeColumn","map","targetIndex","indexOf","userGroup","splice","sections","newColumn","addColumn","scrollToRight","getColumnsContainer","scrollWidth","offsetWidth","index","text","modifiedItems","getMainContainer","querySelectorAll","modifiedRoles","modifiedUsers","accessId","access","item","value","switcher","checked","addSection","getColumns","getSections","getUserGroups","forEach","user","getHeadSection","Section","grid","sectionTitle","rights","getSection","create","props","className","docFragmentSections","document","createDocumentFragment","appendChild","render","innerHTML","afterRender","adjustEars","onMemberSelect","params","option","buildOption","state","onMemberUnselect","controls","Main","selectorManagerV2","selectorInstance","Object","keys","entityTypes","USERGROUPS","enableSearch","searchById","addTab","returnItemUrl","getOption","dataColumnAttribute","node","bindOptions","hasAttribute","columnId","getAttribute","accessItem","entityType","accessCodesResult"],"mappings":"CAAC,WAEA,aAEAA,GAAGC,UAAU,SAEbD,GAAGE,GAAGC,aAAe,SAASC,GAC7BA,EAAUA,MAEVC,KAAKD,QAAUA,EACfC,KAAKC,SAAWF,EAAQE,SACxBD,KAAKE,YAAcP,GAAGE,GAAGM,aAAe,KAExCH,KAAKI,QACJC,UAAW,MAEZL,KAAKM,UAAYP,EAAQO,UAAYP,EAAQO,UAAY,KACzDN,KAAKO,WAAaR,EAAQQ,WAAaR,EAAQQ,WAAa,OAC5DP,KAAKQ,aAAeT,EAAQS,aAAeT,EAAQS,aAAe,SAClER,KAAKS,WAAaV,EAAQU,WAAaV,EAAQU,WAAa,OAC5DT,KAAKU,KAAOX,EAAQW,KAAOX,EAAQW,KAAO,OAC1CV,KAAKW,eAAiBZ,EAAQY,eAAiBZ,EAAQY,eAAiB,KACxEX,KAAKY,eAAiBb,EAAQa,eAAiBb,EAAQa,eAAgB,KACvEZ,KAAKa,qBAAuBd,EAAQc,qBAAuBd,EAAQc,qBAAuB,KAC1Fb,KAAKc,WAAaf,EAAQe,WAAaf,EAAQe,WAAa,KAC5Dd,KAAKe,OAAS,KACdf,KAAKgB,MAAQ,KAEbhB,KAAKiB,WACL,GAAIlB,EAAQmB,WACZ,CACClB,KAAKkB,WAAanB,EAAQmB,WAE3B,GAAInB,EAAQoB,aACZ,CACCnB,KAAKmB,aAAepB,EAAQoB,aAG7BnB,KAAKoB,YAAc,MAEnBpB,KAAKqB,WACLrB,KAAKsB,cAGN3B,GAAGE,GAAGC,aAAayB,WAElBD,WAAY,WAEX3B,GAAG6B,eAAe,2CAA4CxB,KAAKyB,WAAWC,KAAK1B,OACnFL,GAAG6B,eAAe,yCAA0CxB,KAAK2B,kBAAkBD,KAAK1B,OACxFL,GAAG6B,eAAe,0CAA2CxB,KAAK2B,kBAAkBD,KAAK1B,OACzFL,GAAG6B,eAAe,uCAAwCxB,KAAK4B,kBAAkBF,KAAK1B,OACtFL,GAAG6B,eAAe,wCAAyCxB,KAAK6B,aAAaH,KAAK1B,OAClFL,GAAG6B,eAAe,wCAAyCxB,KAAK8B,cAAcJ,KAAK1B,OACnFL,GAAG6B,eAAe,yCAA0CxB,KAAK8B,cAAcJ,KAAK1B,OACpFL,GAAG6B,eAAe,yCAA0CxB,KAAK6B,aAAaH,KAAK1B,OACnFL,GAAG6B,eAAe,2CAA4CxB,KAAK+B,iBAAiBL,KAAK1B,OACzFL,GAAG6B,eAAe,2CAA4CxB,KAAK4B,kBAAkBF,KAAK1B,OAC1FL,GAAG6B,eAAe,sCAAuCxB,KAAKgC,iBAAiBN,KAAK1B,QAGrFiB,SAAU,WAETjB,KAAKmB,gBACLnB,KAAKkB,cACLlB,KAAKiC,wBACLjC,KAAKkC,YAAc,KACnBlC,KAAKmC,WACLnC,KAAKoC,YAGNC,eAAgB,WAEf1C,GAAG2C,cAAcC,OAAQ,2BAA4BvC,OAGtDwC,iBAAkB,WAEjB7C,GAAG2C,cAAcC,OAAQ,6BAA8BvC,OAGxDyC,eAAgB,WAEf,OAAOzC,KAAKE,aAGbwC,iBAAkB,SAASC,GAE1BhD,GAAGE,GAAG+C,aAAaC,OAAOC,QACzBC,QAASJ,EACTK,SAAU,YACVC,cAAe,OAIjBC,kBAAmB,WAElB,GAAIlD,KAAKoB,YACT,CACC,OAGDpB,KAAKoB,YAAc,KAEnBpB,KAAKgB,MAAQmC,WAAW,WACvBnD,KAAKoD,aACJ1B,KAAK1B,MAAO,KAEd,IAAIqD,EAAa,MACjB,IAAIC,KACJ,IAAI,IAAIC,EAAI,EAAGA,EAAGvD,KAAKkB,WAAWsC,OAAQD,IAC1C,CACC,GAAIvD,KAAKkB,WAAWqC,GAAGE,IAAM,EAC7B,CACCJ,EAAa,KAGdC,EAAWI,MACVC,YAAa3D,KAAKkB,WAAWqC,GAAGI,YAChCF,GAAIzD,KAAKkB,WAAWqC,GAAGE,GACvBd,MAAO3C,KAAKkB,WAAWqC,GAAGZ,MAC1BiB,KAAM5D,KAAKkB,WAAWqC,GAAGK,KACzBzC,aAAcnB,KAAKkB,WAAWqC,GAAGpC,eAInCxB,GAAGkE,KAAKC,mBACP9D,KAAKM,UACLN,KAAKO,YAEJG,KAAMV,KAAKU,KACXqD,MACC7C,WAAYoC,EACZU,WAAYhE,KAAKa,wBAOlBoD,KAAK,WACN,GAAIZ,EACJ,CACCrD,KAAKkE,aAGNlE,KAAKoB,YAAc,MACnBpB,KAAK0C,iBAAiB/C,GAAGwE,QAAQ,+CACjCnE,KAAKoE,cACLpE,KAAKwC,mBACLW,WAAW,WACVnD,KAAK4B,qBACJF,KAAK1B,OACPqE,aAAarE,KAAKgB,OAClBhB,KAAKE,YAAYoE,eAAeC,cAAc,gBAAgBC,UAAUC,OAAO,gBAC9E/C,KAAK1B,MAAO,WACbA,KAAKoB,YAAc,MACnBpB,KAAK0C,iBAAiB,iBACtB1C,KAAKoE,cACLC,aAAarE,KAAKgB,OAClBhB,KAAKE,YAAYoE,eAAeC,cAAc,gBAAgBC,UAAUC,OAAO,gBAC9E/C,KAAK1B,OAEPL,GAAG2C,cAAcC,OAAQ,kCAAmCvC,OAG7D0E,oBAAqB,SAAUC,GAE9B,GAAI3E,KAAKoB,YACT,CACC,OAGDpB,KAAKoB,YAAc,KAEnBpB,KAAKgB,MAAQmC,WAAW,WACvBnD,KAAKoD,aACJ1B,KAAK1B,MAAO,KAEdL,GAAGkE,KAAKC,mBACP9D,KAAKM,UACLN,KAAKQ,cAEJE,KAAMV,KAAKU,KACXqD,MACCY,OAAQA,KAOTV,KAAK,WACNjE,KAAKoB,YAAc,MACnBpB,KAAK0C,iBAAiB/C,GAAGwE,QAAQ,mCACjCnE,KAAKoE,cACLC,aAAarE,KAAKgB,QACjBU,KAAK1B,MAAO,WACbA,KAAKoB,YAAc,MACnBpB,KAAK0C,iBAAiB,iBACtB1C,KAAKoE,cACLC,aAAarE,KAAKgB,QACjBU,KAAK1B,QAGRkE,WAAY,WAEXlE,KAAKiB,WAELtB,GAAGkE,KAAKC,mBACP9D,KAAKM,UACLN,KAAKS,YAEJC,KAAMV,KAAKU,KACXqD,MACCC,WAAYhE,KAAKc,cAGlBmD,KAAK,SAAUW,GAChB,GACCA,EAASb,KAAK,kBACXa,EAASb,KAAK,eAChB,CACD/D,KAAKmB,aAAeyD,EAASb,KAAKc,cAClC7E,KAAKkB,WAAa0D,EAASb,KAAKe,YAChC9E,KAAKqB,WACLrB,KAAK+E,OAEN/E,KAAKoE,eACJ1C,KAAK1B,MAAO,WACbA,KAAKoE,eACJ1C,KAAK1B,QAGRoD,UAAW,WAEV,IAAI4B,EAAYhF,KAAKI,OAAOC,UAAU4E,wBAAwBC,IAAM,EAAI,IAAMlF,KAAKI,OAAOC,UAAU4E,wBAAwBC,IAE5HlF,KAAKI,OAAOC,UAAUmE,UAAUW,IAAI,0BACpCnF,KAAKI,OAAOC,UAAU+E,MAAMC,OAAS,gBAAkBL,EAAa,MAEpE7B,WAAW,WACVnD,KAAKI,OAAOC,UAAU+E,MAAMC,OAAS,gBAAkBL,EAAa,OACnEtD,KAAK1B,OAEP,IAAIsF,EAAOtF,KACXA,KAAKuF,YAAYtB,KAAK,WAErBqB,EAAKvE,OAAOyE,UAIdpB,YAAa,WAEZpE,KAAKI,OAAOC,UAAUmE,UAAUC,OAAO,0BACvCzE,KAAKI,OAAOC,UAAU+E,MAAMC,OAAS,KAErC,IAAIC,EAAOtF,KACXA,KAAKuF,YAAYtB,KAAK,WAErBqB,EAAKvE,OAAO0E,UAIdC,oBAAqB,WAEpB,OAAO,IAAIC,QAAQ,SAASC,GAE3B,GAAGjG,GAAGkG,OACN,CACC,OAAOD,IAGRjG,GAAGmG,QAAQ,eAAe7B,KAAK,WAE9B2B,SAKHL,UAAW,WAEV,IAAID,EAAOtF,KACX,OAAO,IAAI2F,QAAQ,SAASC,GAE3BN,EAAKI,sBAAsBzB,KAAK,WAE/B,IAAIqB,EAAKvE,OACT,CACCuE,EAAKvE,OAAS,IAAIpB,GAAGkG,QACpBE,OAAQT,EAAKlF,OAAOC,YAGtBuF,SAKH7D,iBAAkB,SAASiE,GAE1BhG,KAAKkC,YAAY+D,aAAaD,EAAMjC,MACpC/D,KAAKiC,qBAAqBiE,IAAI,SAASnC,GACtCA,EAAKkC,aAAaD,EAAMjC,QAGzB,IAAIoC,EAAcnG,KAAKkB,WAAWkF,QAAQJ,EAAMjC,KAAKsC,WACrDrG,KAAKkB,WAAWoF,OAAOH,EAAa,GAEpC,IAAIxB,EAASqB,EAAMjC,KAAKsC,UAAU5C,GAClCzD,KAAK0E,oBAAoBC,IAG1B7C,cAAe,SAASkE,GAEvB,IAAIA,EACJ,CACC,OAGD,IAAIO,EAAWvG,KAAKiC,qBAEpB,IAAK,IAAIsB,EAAI,EAAGA,EAAIgD,EAAS/C,OAAQD,IACrC,CACCyC,EAAM9D,YAAc,MACpB8D,EAAMQ,UAAY,KAClBD,EAAShD,GAAGkD,UAAUT,GACtBO,EAAShD,GAAGmD,cAAcH,EAAShD,GAAGoD,sBAAsBC,YAAcL,EAAShD,GAAGoD,sBAAsBE,YAAa,QAG1Hb,EAAM9D,YAAc,KACpB8D,EAAMQ,UAAY,KAClBxG,KAAKkC,YAAYuE,UAAUT,IAI5BnE,aAAc,SAAS9B,GAEtBA,EAAUA,MACVC,KAAKkB,WAAWwC,KAAK3D,IAGtB0B,WAAY,SAAS1B,GAEpB,IAAI+G,EAAQ9G,KAAKkB,WAAWkF,QAAQrG,EAAQgE,KAAKsC,WACjD,GAAGS,GAAS,EACZ,CACC9G,KAAKkB,WAAW4F,GAAOnE,MAAQ5C,EAAQgE,KAAKgD,OAI9CnF,kBAAmB,WAElB,IAAIoF,EAAgBhH,KAAKiH,mBAAmBC,iBAAiB,4CAC7D,IAAIC,EAAgBnH,KAAKiH,mBAAmBC,iBAAiB,gCAC7D,IAAIE,EAAgBpH,KAAKiH,mBAAmBC,iBAAiB,sCAE7D,GAAGF,EAAcxD,OAAS,GAAK2D,EAAc3D,OAAS,GAAK4D,EAAc5D,OAAS,EAClF,CACCxD,KAAKE,YAAYsF,WAGlB,CACCxF,KAAKE,YAAYuF,SAInB9D,kBAAmB,SAAS5B,GAE3B,IAAIgE,EAAOhE,EAAQgE,KACnB,IAAIsC,EAAYrG,KAAKkB,WAAWlB,KAAKkB,WAAWkF,QAAQrC,EAAKsC,YAC7D,IAAIgB,EAAWtD,EAAKuD,OAAO7D,GAE3B,IAAK,IAAIF,EAAI,EAAGA,EAAI8C,EAAUlF,aAAaqC,OAAQD,IACnD,CACC,IAAIgE,EAAOlB,EAAUlF,aAAaoC,GAClC,GAAGgE,EAAK9D,KAAO4D,EACf,CACEE,EAAKC,QAAU,IAAOD,EAAKC,MAAQ,IAAMD,EAAKC,MAAQ,IAEvD,QAIFnB,EAAUlF,aAAauC,MACtBD,GAAI4D,EACJG,MAAOzD,EAAK0D,SAASC,QAAU,IAAM,OAIvCrG,SAAU,WAETrB,KAAKmB,aAAa+E,IAAI,SAASnC,EAAM+C,GACpC/C,EAAKN,GAAKqD,EACV9G,KAAKiC,qBAAqByB,KAAK1D,KAAK2H,WAAW5D,KAC9CrC,KAAK1B,QAGR4H,WAAY,WAEX,OAAO5H,KAAKoC,SAGbyF,YAAa,WAEZ,OAAO7H,KAAKiC,sBAGb6F,cAAgB,WAEf9H,KAAKkB,WAAW6G,QAAQ,SAASR,GAChC,GAAGA,EAAK5D,YACR,CACC,IAAI,IAAIqE,KAAQT,EAAKpF,QACrB,CACCoF,EAAK5D,YAAYqE,GAAQT,EAAKpF,QAAQ6F,GAAMpE,SAK/C,OAAO5D,KAAKkB,YAGb+G,eAAgB,WAEf,IAAIjI,KAAKkC,YACT,CACClC,KAAKkC,YAAc,IAAIvC,GAAGE,GAAGC,aAAaoI,SACzChG,YAAa,KACbhB,WAAYlB,KAAKkB,WACjBiH,KAAMnI,OAIR,OAAOA,KAAKkC,aAGbyF,WAAY,SAAS5H,GAEpBA,EAAUA,MACV,OAAO,IAAIJ,GAAGE,GAAGC,aAAaoI,SAC7BzE,GAAI1D,EAAQ0D,GACZd,MAAO5C,EAAQqI,aACfC,OAAQtI,EAAQsI,OAAStI,EAAQsI,UACjCF,KAAMnI,QAIRsI,WAAY,WAEX,OAAO3I,GAAG4I,OAAO,OAChBC,OACCC,UAAW,+BAKdxB,iBAAkB,WAEjB,IAAIjH,KAAKI,OAAOC,UAChB,CACCL,KAAKI,OAAOC,UAAYV,GAAG4I,OAAO,OACjCC,OACCC,UAAW,sBAKd,OAAOzI,KAAKI,OAAOC,WAGpB0E,KAAM,WAEL,IAAI2D,EAAsBC,SAASC,yBACnCF,EAAoBG,YAAY7I,KAAKiI,iBAAiBa,UAEtD9I,KAAK6H,cAAc3B,IAAI,SAASnC,GAC/B2E,EAAoBG,YAAY9E,EAAK+E,WACpCpH,KAAK1B,OAEPA,KAAKI,OAAOC,UAAY,KACxBL,KAAKiH,mBAAmB4B,YAAYH,GAEpC1I,KAAKC,SAAS8I,UAAY,GAC1B/I,KAAKC,SAAS4I,YAAY7I,KAAKI,OAAOC,WACtCL,KAAKgJ,eAGNA,YAAa,WAEZhJ,KAAKiI,iBAAiBgB,aACtBjJ,KAAK6H,cAAc3B,IAAI,SAASnC,GAC/BA,EAAKkF,gBAIPC,eAAgB,SAASC,GAExB,IAAIC,EAASzJ,GAAGE,GAAGC,aAAauJ,YAAYF,GAC5C,IAAIC,EACJ,CACC,OAGD,GAAGD,EAAOG,QAAU,SACpB,CACC3J,GAAG2C,cAAc,sCAAuC8G,KAI1DG,iBAAkB,SAASJ,GAE1B,IAAIC,EAASzJ,GAAGE,GAAGC,aAAauJ,YAAYF,GAE5C,IAAIC,EACJ,CACC,OAGDzJ,GAAG2C,cAAc,2CAA4C8G,IAG9DpH,iBAAkB,WAEjB,IAAIwH,EAAW7J,GAAG8J,KAChBC,kBAAkBF,SACpB,IAAIG,EAAmBH,EAASI,OAAOC,KAAKL,GAAU,IAEtDG,EAAiBG,YAAYC,YAC5BhK,SACCiK,aAAc,IACdC,WAAY,IACZC,OAAQ,IACRC,cAAgBR,EAAiBS,UAAU,kBAAoB,IAAM,IAAM,QAM/EzK,GAAGE,GAAGC,aAAauJ,YAAc,SAASF,GAEzC,IAAIK,EAAW7J,GAAG8J,KAChBC,kBAAkBF,SACpB,IAAIG,EAAmBH,EAASI,OAAOC,KAAKL,GAAU,IAAIG,iBAC1D,IAAIU,EAAsB,oBAE1B,IAAIC,EAAOX,EAAiBY,YAAYD,KAExC,IAAIA,EAAKE,aAAaH,WAA+BlB,EAAO5B,OAAS,YACrE,CACC,OAAO,MAGR,IAAIkD,EAAYH,EAAKI,aAAaL,GAElC,IAAIM,EAAaxB,EAAO5B,KAAK9D,GAC7B,IAAImH,EAAazB,EAAOyB,WACxB,IAAIC,KACJA,EAAkBF,GAAcC,EAEhC,OACCjH,YAAakH,EACbJ,SAAUA,EACVlD,KAAM4B,EAAO5B,QAljBf","file":"grid.map.js"}