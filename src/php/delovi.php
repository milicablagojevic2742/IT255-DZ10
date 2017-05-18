<?php
 	header("Access-Control-Allow-Origin: *");
	$data = array(
		array('id' => '1','mark' => 'audi','manufacturer' => 'ICER','name' => 'Prednji kocioni diskovi','price' => '6946'),
		array('id' => '2','mark' => 'audi','manufacturer' => 'Polcar','name' => 'EGR ventil','price' => '11070'),
		array('id' => '3','mark' => 'hyundai','manufacturer' => 'PowerMax','name' => 'Alternator','price' => '21200'),
		array('id' => '4','mark' => 'BMW','manufacturer' => 'Bosch','name' => 'ABS senzor','price' => '6295'),
		array('id' => '5','mark' => 'sve','manufacturer' => 'Bosch','name' => 'Akumulator','price' => '12418')
	);
 
	echo json_encode($data);
?>