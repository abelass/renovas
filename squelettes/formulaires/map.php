<?php

if (!defined('_ECRIRE_INC_VERSION')) return;

function formulaires_map_charger_dist(){
	$valeurs = [
		'cq' => _request('cq'),
		'op' => _request('op'),
		'annee' => _request('annee')];
	return $valeurs;
}
