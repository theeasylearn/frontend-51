import ReactDOM from 'react-dom/client';
function CountryDesign(props) {
    let countries = props.countries;

    let output = countries.map((item, index) => {
        return (<div key={index} className="col">
            <div className="card country-card h-100 shadow border-0">
                <div className="card-body text-center d-flex flex-column">
                    <h2 className="card-title">{item.name}</h2>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>{item.capital}</li>
                        <li className='list-group-item'>{item.currency}</li>
                    </ul>
                </div>
            </div>
        </div>)
    })
    return output
}
function MainDesign() {
    // list of object(JSON)
    const countries = [
        { name: "Afghanistan", capital: "Kabul", currency: "Afghani" },
        { name: "Albania", capital: "Tirane", currency: "Lek" },
        { name: "Algeria", capital: "Algiers", currency: "Dinar" },
        { name: "Andorra", capital: "Andorra la Vella", currency: "Euro" },
        { name: "Angola", capital: "Luanda", currency: "New Kwanza" },
        { name: "Antigua and Barbuda", capital: "Saint John's", currency: "East Caribbean dollar" },
        { name: "Argentina", capital: "Buenos Aires", currency: "Peso" },
        { name: "Armenia", capital: "Yerevan", currency: "Dram" },
        { name: "Australia", capital: "Canberra", currency: "Australian dollar" },
        { name: "Austria", capital: "Vienna", currency: "Euro" },
        { name: "Azerbaijan", capital: "Baku", currency: "Manat" },
        { name: "Bahamas", capital: "Nassau", currency: "Bahamian dollar" },
        { name: "Bahrain", capital: "Manama", currency: "Bahrain dinar" },
        { name: "Bangladesh", capital: "Dhaka", currency: "Taka" },
        { name: "Barbados", capital: "Bridgetown", currency: "Barbados dollar" },
        { name: "Belarus", capital: "Minsk", currency: "Belorussian ruble" },
        { name: "Belgium", capital: "Brussels", currency: "Euro" },
        { name: "Belize", capital: "Belmopan", currency: "Belize dollar" },
        { name: "Benin", capital: "Porto-Novo", currency: "CFA Franc" },
        { name: "Bhutan", capital: "Thimphu", currency: "Ngultrum" },
        { name: "Bolivia", capital: "La Paz", currency: "Boliviano" },
        { name: "Bosnia and Herzegovina", capital: "Sarajevo", currency: "Convertible Mark" },
        { name: "Botswana", capital: "Gaborone", currency: "Pula" },
        { name: "Brazil", capital: "Brasilia", currency: "Real" },
        { name: "Bulgaria", capital: "Sofia", currency: "Lev" },
        { name: "Burkina Faso", capital: "Ouagadougou", currency: "CFA Franc" },
        { name: "Burundi", capital: "Gitega", currency: "Burundi franc" },
        { name: "Cambodia", capital: "Phnom Penh", currency: "Riel" },
        { name: "Cameroon", capital: "Yaounde", currency: "CFA Franc" },
        { name: "Canada", capital: "Ottawa", currency: "Canadian dollar" },
        { name: "Central African Republic", capital: "Bangui", currency: "CFA Franc" },
        { name: "Chad", capital: "N’Djamena", currency: "CFA Franc" },
        { name: "Chile", capital: "Santiago", currency: "Chilean Peso" },
        { name: "China", capital: "Beijing", currency: "Chinese Yuan" },
        { name: "Colombia", capital: "Bogota", currency: "Colombian Peso" },
        { name: "Comoros", capital: "Moroni", currency: "Franc" },
        { name: "Congo", capital: "Brazzaville", currency: "CFA Franc" },
        { name: "Costa Rica", capital: "San Jose", currency: "Colón" },
        { name: "Croatia", capital: "Zagreb", currency: "Euro" },
        { name: "Cuba", capital: "Havana", currency: "Cuban Peso" },
        { name: "Cyprus", capital: "Nicosia", currency: "Euro" },
        { name: "Czechia", capital: "Prague", currency: "Koruna" },
        { name: "Denmark", capital: "Copenhagen", currency: "Danish Krone" },
        { name: "Djibouti", capital: "Djibouti", currency: "Djiboutian franc" },
        { name: "Dominica", capital: "Roseau", currency: "East Caribbean dollar" },
        { name: "Dominican Republic", capital: "Santo Domingo", currency: "Dominican Peso" },
        { name: "Ecuador", capital: "Quito", currency: "U.S. dollar" },
        { name: "Egypt", capital: "Cairo", currency: "Egyptian pound" },
        { name: "El Salvador", capital: "San Salvador", currency: "U.S. dollar" },
        { name: "Equatorial Guinea", capital: "Malabo", currency: "CFA Franc" },
        { name: "Eritrea", capital: "Asmara", currency: "Nakfa" },
        { name: "Estonia", capital: "Tallinn", currency: "Euro" },
        { name: "Ethiopia", capital: "Addis Ababa", currency: "Birr" },
        { name: "Fiji", capital: "Suva", currency: "Fiji dollar" },
        { name: "Finland", capital: "Helsinki", currency: "Euro" },
        { name: "France", capital: "Paris", currency: "Euro" },
        { name: "Gabon", capital: "Libreville", currency: "CFA Franc" },
        { name: "Gambia", capital: "Banjul", currency: "Dalasi" },
        { name: "Georgia", capital: "Tbilisi", currency: "Lari" },
        { name: "Germany", capital: "Berlin", currency: "Euro" },
        { name: "Ghana", capital: "Accra", currency: "Cedi" },
        { name: "Greece", capital: "Athens", currency: "Euro" },
        { name: "Grenada", capital: "Saint George’s", currency: "East Caribbean dollar" },
        { name: "Guatemala", capital: "Guatemala City", currency: "Quetzal" },
        { name: "Guinea", capital: "Conakry", currency: "Guinean franc" },
        { name: "Guyana", capital: "Georgetown", currency: "Guyanese dollar" },
        { name: "Haiti", capital: "Port-au-Prince", currency: "Gourde" },
        { name: "Honduras", capital: "Tegucigalpa", currency: "Lempira" },
        { name: "Hungary", capital: "Budapest", currency: "Forint" },
        { name: "Iceland", capital: "Reykjavik", currency: "Icelandic króna" },
        { name: "India", capital: "New Delhi", currency: "Indian Rupee" },
        { name: "Indonesia", capital: "Jakarta", currency: "Rupiah" },
        { name: "Iran", capital: "Tehran", currency: "Rial" },
        { name: "Iraq", capital: "Baghdad", currency: "Iraqi Dinar" },
        { name: "Ireland", capital: "Dublin", currency: "Euro" },
        { name: "Israel", capital: "Jerusalem", currency: "Shekel" },
        { name: "Italy", capital: "Rome", currency: "Euro" },
        { name: "Jamaica", capital: "Kingston", currency: "Jamaican dollar" },
        { name: "Japan", capital: "Tokyo", currency: "Yen" },
        { name: "Jordan", capital: "Amman", currency: "Jordanian dinar" },
        { name: "Kazakhstan", capital: "Nur-Sultan", currency: "Tenge" },
        { name: "Kenya", capital: "Nairobi", currency: "Kenya shilling" },
        { name: "Korea North", capital: "Pyongyang", currency: "Won" },
        { name: "Korea South", capital: "Seoul", currency: "Won" },
        { name: "Kuwait", capital: "Kuwait City", currency: "Kuwaiti Dinar" },
        { name: "Kyrgyzstan", capital: "Bishkek", currency: "Som" },
        { name: "Laos", capital: "Vientiane", currency: "New Kip" },
        { name: "Latvia", capital: "Riga", currency: "Euro" },
        { name: "Lebanon", capital: "Beirut", currency: "Lebanese pound" },
        { name: "Lesotho", capital: "Maseru", currency: "Maluti" },
        { name: "Liberia", capital: "Monrovia", currency: "Liberian dollar" },
        { name: "Libya", capital: "Tripoli", currency: "Libyan dinar" },
        { name: "Liechtenstein", capital: "Vaduz", currency: "Swiss franc" },
        { name: "Lithuania", capital: "Vilnius", currency: "Euro" },
        { name: "Luxembourg", capital: "Luxembourg", currency: "Euro" },
        { name: "Malaysia", capital: "Kuala Lumpur", currency: "Ringgit" },
        { name: "Maldives", capital: "Male", currency: "Rufiyaa" },
        { name: "Mali", capital: "Bamako", currency: "CFA Franc" },
        { name: "Malta", capital: "Valletta", currency: "Euro" },
        { name: "Mauritania", capital: "Nouakchott", currency: "Ouguiya" },
        { name: "Mauritius", capital: "Port Louis", currency: "Mauritian rupee" },
        { name: "Mexico", capital: "Mexico City", currency: "Mexican peso" },
        { name: "Moldova", capital: "Chisinau", currency: "Leu" },
        { name: "Mongolia", capital: "Ulaanbaatar", currency: "Togrog" },
        { name: "Montenegro", capital: "Podgorica", currency: "Euro" },
        { name: "Morocco", capital: "Rabat", currency: "Dirham" },
        { name: "Mozambique", capital: "Maputo", currency: "Metical" },
        { name: "Myanmar", capital: "Nay Pyi Taw", currency: "Kyat" },
        { name: "Namibia", capital: "Windhoek", currency: "Namibian dollar" },
        { name: "Nepal", capital: "Kathmandu", currency: "Nepalese rupee" },
        { name: "Netherlands", capital: "Amsterdam", currency: "Euro" },
        { name: "New Zealand", capital: "Wellington", currency: "New Zealand dollar" },
        { name: "Nicaragua", capital: "Managua", currency: "Gold cordoba" },
        { name: "Niger", capital: "Niamey", currency: "CFA Franc" },
        { name: "Nigeria", capital: "Abuja", currency: "Naira" },
        { name: "Norway", capital: "Oslo", currency: "Norwegian krone" },
        { name: "Oman", capital: "Muscat", currency: "Omani rial" },
        { name: "Pakistan", capital: "Islamabad", currency: "Pakistani rupee" },
        { name: "Panama", capital: "Panama City", currency: "Balboa" },
        { name: "Papua New Guinea", capital: "Port Moresby", currency: "Kina" },
        { name: "Paraguay", capital: "Asuncion", currency: "Guaraní" },
        { name: "Peru", capital: "Lima", currency: "Nuevo sol" },
        { name: "Philippines", capital: "Manila", currency: "Peso" },
        { name: "Poland", capital: "Warsaw", currency: "Zloty" },
        { name: "Portugal", capital: "Lisbon", currency: "Euro" },
        { name: "Qatar", capital: "Doha", currency: "Qatari riyal" },
        { name: "Romania", capital: "Bucharest", currency: "Romanian Leu" },
        { name: "Russia", capital: "Moscow", currency: "Ruble" },
        { name: "Rwanda", capital: "Kigali", currency: "Rwandan franc" },
        { name: "Saint Kitts and Nevis", capital: "Basseterre", currency: "East Caribbean dollar" },
        { name: "Saint Lucia", capital: "Castries", currency: "East Caribbean dollar" },
        { name: "Saint Vincent and the Grenadines", capital: "Kingstown", currency: "East Caribbean dollar" },
        { name: "Samoa", capital: "Apia", currency: "Tala" },
        { name: "Saudi Arabia", capital: "Riyadh", currency: "Riyal" },
        { name: "Senegal", capital: "Dakar", currency: "CFA Franc" },
        { name: "Serbia", capital: "Belgrade", currency: "Serbian Dinar" },
        { name: "Seychelles", capital: "Victoria", currency: "Seychelles rupee" },
        { name: "Sierra Leone", capital: "Freetown", currency: "Leone" },
        { name: "Singapore", capital: "Singapore", currency: "Singapore dollar" },
        { name: "Slovakia", capital: "Bratislava", currency: "Euro" },
        { name: "Slovenia", capital: "Ljubljana", currency: "Euro" },
        { name: "South Africa", capital: "Pretoria", currency: "Rand" },
        { name: "Spain", capital: "Madrid", currency: "Euro" },
        { name: "Sri Lanka", capital: "Colombo", currency: "Sri Lankan rupee" },
        { name: "Sudan", capital: "Khartoum", currency: "Sudanese Pound" },
        { name: "Suriname", capital: "Paramaribo", currency: "Surinamese dollar" },
        { name: "Sweden", capital: "Stockholm", currency: "Krona" },
        { name: "Switzerland", capital: "Bern", currency: "Swiss franc" },
        { name: "Syria", capital: "Damascus", currency: "Syrian pound" },
        { name: "Taiwan", capital: "Taipei", currency: "Taiwan dollar" },
        { name: "Tajikistan", capital: "Dushanbe", currency: "Somoni" },
        { name: "Tanzania", capital: "Dodoma", currency: "Tanzanian shilling" },
        { name: "Thailand", capital: "Bangkok", currency: "Baht" },
        { name: "Togo", capital: "Lome", currency: "CFA Franc" },
        { name: "Tonga", capital: "Nuku’alofa", currency: "Pa’anga" },
        { name: "Trinidad and Tobago", capital: "Port-of-Spain", currency: "Trinidad and Tobago dollar" },
        { name: "Tunisia", capital: "Tunis", currency: "Tunisian dinar" },
        { name: "Turkey", capital: "Ankara", currency: "Turkish lira" },
        { name: "Turkmenistan", capital: "Ashgabat", currency: "Manat" },
        { name: "Uganda", capital: "Kampala", currency: "Ugandan shilling" },
        { name: "Ukraine", capital: "Kyiv", currency: "Hryvnia" },
        { name: "United Arab Emirates", capital: "Abu Dhabi", currency: "U.A.E. Dirham" },
        { name: "United Kingdom", capital: "London", currency: "Pound sterling" },
        { name: "United States", capital: "Washington D.C.", currency: "Dollar" },
        { name: "Uruguay", capital: "Montevideo", currency: "Uruguay peso" },
        { name: "Uzbekistan", capital: "Tashkent", currency: "Uzbekistani sum" },
        { name: "Vanuatu", capital: "Port-Vila", currency: "Vatu" },
        { name: "Venezuela", capital: "Caracas", currency: "Bolivar" },
        { name: "Vietnam", capital: "Hanoi", currency: "Dong" },
        { name: "Yemen", capital: "Sanaa", currency: "Rial" },
        { name: "Zambia", capital: "Lusaka", currency: "Kwacha" },
        { name: "Zimbabwe", capital: "Harare", currency: "United States dollar" }
    ];
    return (<div className="container py-5">
        {/* Header */}
        <div className="row mb-5">
            <div className="col-12 text-center">
                <h1 className="display-5 fw-bold text-primary">🌍 Countries Explorer</h1>
                <p className="lead text-muted">Responsive Bootstrap 5 Card Grid</p>
            </div>
        </div>
        {/* Responsive Grid */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <CountryDesign countries={countries} />


        </div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainDesign />)