"use strict";

ReactDOM.render(   
    <EJ.ComboBox id="autofill" width="100%" dataSource = {auto_complete_carList} placeholder="Select a car" autofill={true}>
	</EJ.ComboBox>,
	document.getElementById('combobox-autofill')
);