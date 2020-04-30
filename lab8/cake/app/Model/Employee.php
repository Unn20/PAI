<?php
App::uses('AppModel', 'Model');
/**
 * Employee Model
 *
 */
class Employee extends AppModel {
    var $name = 'Employee';

    var $validate = array(
        'nazwisko' => array('rule' => 'notBlank'),
        'etat' => array('rule' => array('inList', array('Etat1', 'Etat2'))), 
        'placa_pod' => array('rule' => array('range', 0, 2000),
            'message' => 'Please enter salary between 0 and 2000.'),
    );
}
