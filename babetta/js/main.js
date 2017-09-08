function ShowLevel(row,lv) {
	var tBody = row.parentNode;
	var i = row.rowIndex+1;
	row = tBody.rows[i]; // Попытка перейти к следующей строке
	while (row && row.className.substring(3)*1 > lv) {
		if (row.className.substring(3)*1 == lv+1) {
			row.style.display = 'table-row';
			if ((row.querySelector('td input')) && row.querySelector('td input').checked) {
				ShowLevel(row,lv+1);
			}
		}
		i+=1;
		row = tBody.rows[i];
	}
}

function HideLevel(row,lv) {
	var i = row.rowIndex+1;
	var tBody = row.parentNode;
	row = tBody.rows[i]; // Попытка перейти к следующей строке
	while (row && row.className.substring(3)*1 > lv) {
		row.style.display = 'none';
		i+=1;
		row = tBody.rows[i];
	}
}

function sh(el) {
	var row = el.parentNode.parentNode.parentNode;
	var lv = row.className.substring(3)*1; // Уровень строки, циферка после 'lev'
	if (row.querySelector('td input').checked) {
		HideLevel(row,lv);
	} else {
		ShowLevel(row,lv);
	}
}
