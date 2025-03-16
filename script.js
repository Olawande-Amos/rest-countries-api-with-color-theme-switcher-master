const getJsonData = async () =>{
    try {
        const jsonFile = await fetch ('./rest-countries-api-with-color-theme-switcher-master/data.json')
        const response  = await  jsonFile.json()
        printEachCountry(response)
        filter(response)
        coutryDisplayRegions(response)
        console.log(response)
        // console.log( data.name)
       
        
        
    } catch (error) {
        console.error('Error:' + error)
    }
}
    getJsonData()

    const printEachCountry = (data) => {
        const countryContainer = document.querySelector('#countriesContainer')
        let htmlcontent = ''
        data.forEach((jsonObject) => {
            // console.log(jsonObject.borders);
            
           
            htmlcontent += `
            
            <div class="countries-info">
                <img src=" ${jsonObject.flags.svg}" class="flagImage" alt="flag">
                <div class="country-details">
                    <h3>${jsonObject.name}</h3>
                    <p><span>Population:</span> ${jsonObject.population}</p>
                    <p><span>Region:</span> ${jsonObject.region}</p>
                    <p><span>Capital:</span> ${jsonObject.capital}</p>
                </div>
            </div>
            `
            countryContainer.innerHTML= htmlcontent
        })
    }

    const filter =(region)=>{
       const filterRegions= document.getElementById('filterRegions')
       const regionAfrica = document.getElementById('regionAfrica')
       const countriesinfo= document.querySelectorAll('.countries-info')
     
      
   

       region.forEach((countryRegion)=> {
        const countriesinfo= document.querySelectorAll('.countries-info')

            // const region = [
            //     {name:countryRegion.name, region:countryRegion.region}
            // ]
            // const filterdRegions = region.filter(item => item.region ==="Africa")
            // console.log(filterdRegions);
            const region = [
                {name:countryRegion.name, region:countryRegion.region}
            ]
            // (selestedregion ==="Africa") 
            // const item = item.region ==="Africa"
            // if (item.region ==="Africa") {
                const filterdRegions = region.filter(item => item.region ==="Africa")
                console.log('this are the filtered regions',filterdRegions);
                // countriesinfo.forEach(element => {
                //     element.style.background = 'black';
                //   });


            // }else{
            //     console.log("No filtering applied or selected region is not Africa.");
            //     countriesinfo.style.background = 'red'
            // }

            filterRegions.addEventListener('change',()=>{
                // const selestedregion = filterRegions.value
        
                // event.target.Africa
              
              
            })

          
            
            

            // console.log(region);
            

            // console.log(countryRegion.region);
            // const region = countryRegion.region
            // console.log(region)
            // console.log(typeof region);
            
            

            // const filterdRegions = region.filter(item => !item.includes("Africa"))
            // console.log(filterdRegions);

            

            
            
       })   

    }

    const coutryDisplayRegions = (countryDisplay)=>{
        const contentDisplay = document.querySelector('.content-holder')
        let displayContent = ''

        countryDisplay.forEach((countryDisplay) => {
            displayContent+=`
                 <div class="flag-holder">
                        <img src="${countryDisplay.flags.svg}" alt="">
                    </div>
                    <div class="countrydisplay-details">
                        <div class="displaydetails-1">
                            <h1>${countryDisplay.name}</h1>
                            <p><span>Native Name:</span>${countryDisplay.nativeName}</p>
                            <p><span>poulation:</span>${countryDisplay.population}</p>
                            <p><span>Region:</span>${countryDisplay.region}</p>
                            <p><span>Sub-region:</span>${countryDisplay.subregion}</p>
                            <p><span>Capital:</span>${countryDisplay.capital}</p>
                        </div>
                        <div class="displayDetails-2">
                            <p><span>topLevelDomain:</span>${countryDisplay.topLevelDomain}</p>
                            <p><span>currencies:</span>${countryDisplay.currencies}</p>
                            <p><span>Languages:</span>${countryDisplay.languages}</p>
                        </div>
                        <div class="bordercounteris">
                            <p><span>Border Countries:</span>${countryDisplay.borders}</p>
                        </div>
                    </div>
            `
            contentDisplay.innerHTML= displayContent
        });

    }
  
  