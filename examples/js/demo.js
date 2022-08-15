var conditions, actions, nameField, ageField, occupationField, submit, allData;
(function($) {
  var occupationOptions = [ "Software Engineer", "Biz Dev", "Marketing" ];

  function getInitialData() {
    return {'variables': [{'name': 'Created_Date',
    'label': 'Created Date',
    'field_type': 'string',
    'options': []},
   {'name': 'Effective_Date',
    'label': 'Effective Date',
    'field_type': 'string',
    'options': []},
   {'name': 'Policy_Carrier',
    'label': 'Policy Carrier',
    'field_type': 'select',
    'options': ['NATIONWIDE',
     'HIPPO',
     'BRANCH',
     'UNIVERSAL',
     'BAMBOO',
     'SAFECO',
     'MERCURY',
     'Foremost Signature',
     'TRAVELERS',
     'Progressive/ASI',
     'SWYFFT',
     'FOREMOST',
     'UNIVERSAL',
     'Hagerty',
     'BW',
     'NEPTUNE']},
   {'name': 'Policy_ID',
    'label': 'Policy Id',
    'field_type': 'string',
    'options': []},
   {'name': 'Policy_Points',
    'label': 'Policy Points',
    'field_type': 'numeric',
    'options': []},
   {'name': 'Premium_Amount',
    'label': 'Premium Amount',
    'field_type': 'numeric',
    'options': []},
   {'name': 'Sold_Date',
    'label': 'Sold Date',
    'field_type': 'string',
    'options': []},
   {'name': 'State', 'label': 'State', 'field_type': 'string', 'options': []},
   {'name': 'Status',
    'label': 'Status',
    'field_type': 'select',
    'options': ['New', 'Rewritten', 'Renewed']},
   {'name': 'Subtype',
    'label': 'Subtype',
    'field_type': 'select',
    'options': ['Renters',
     'Personal Auto',
     'Homeowners',
     'Motorcycle',
     'ATV/UTV',
     'Condo',
     'RV',
     'Trailer',
     'Mobile Homeowners',
     '']},
   {'name': 'Type',
    'label': 'Type',
    'field_type': 'select',
    'options': ['Homeowners',
     'Personal Auto',
     'Personal Umbrella',
     'Dwelling Fire',
     'Flood',
     'Watercraft',
     'Business Automobile']}],
  'actions': [{'name': 'add_points',
    'label': 'Add Points',
    'params': [{'label': 'Points To Add',
      'name': 'points_to_add',
      'fieldType': 'numeric'}]}],
  'variable_type_operators': {'boolean': [{'name': 'is_false',
     'label': 'Is False',
     'input_type': 'none'},
    {'name': 'is_true', 'label': 'Is True', 'input_type': 'none'}],
   'datetime': [{'name': 'earlier_than',
     'label': 'Earlier Than',
     'input_type': 'datetime'},
    {'name': 'earlier_than_or_equal_to',
     'label': 'Earlier Than Or Equal To',
     'input_type': 'datetime'},
    {'name': 'equal_to', 'label': 'Equal To', 'input_type': 'datetime'},
    {'name': 'later_than', 'label': 'Later Than', 'input_type': 'datetime'},
    {'name': 'later_than_or_equal_to',
     'label': 'Later Than Or Equal To',
     'input_type': 'datetime'}],
   'numeric': [{'name': 'equal_to',
     'label': 'Equal To',
     'input_type': 'numeric'},
    {'name': 'greater_than', 'label': 'Greater Than', 'input_type': 'numeric'},
    {'name': 'greater_than_or_equal_to',
     'label': 'Greater Than Or Equal To',
     'input_type': 'numeric'},
    {'name': 'less_than', 'label': 'Less Than', 'input_type': 'numeric'},
    {'name': 'less_than_or_equal_to',
     'label': 'Less Than Or Equal To',
     'input_type': 'numeric'}],
   'select_multiple': [{'name': 'contains_all',
     'label': 'Contains All',
     'input_type': 'select_multiple'},
    {'name': 'is_contained_by',
     'label': 'Is Contained By',
     'input_type': 'select_multiple'},
    {'name': 'shares_at_least_one_element_with',
     'label': 'Shares At Least One Element With',
     'input_type': 'select_multiple'},
    {'name': 'shares_exactly_one_element_with',
     'label': 'Shares Exactly One Element With',
     'input_type': 'select_multiple'},
    {'name': 'shares_no_elements_with',
     'label': 'Shares No Elements With',
     'input_type': 'select_multiple'}],
   'select': [{'name': 'contains', 'label': 'Contains', 'input_type': 'select'},
    {'name': 'does_not_contain',
     'label': 'Does Not Contain',
     'input_type': 'select'}],
   'string': [{'name': 'contains', 'label': 'Contains', 'input_type': 'text'},
    {'name': 'ends_with', 'label': 'Ends With', 'input_type': 'text'},
    {'name': 'equal_to', 'label': 'Equal To', 'input_type': 'text'},
    {'name': 'equal_to_case_insensitive',
     'label': 'Equal To (case insensitive)',
     'input_type': 'text'},
    {'name': 'matches_regex', 'label': 'Matches Regex', 'input_type': 'text'},
    {'name': 'non_empty', 'label': 'Non Empty', 'input_type': 'none'},
    {'name': 'starts_with', 'label': 'Starts With', 'input_type': 'text'}],
   'time': [{'name': 'earlier_than',
     'label': 'Earlier Than',
     'input_type': 'time'},
    {'name': 'earlier_than_or_equal_to',
     'label': 'Earlier Than Or Equal To',
     'input_type': 'time'},
    {'name': 'equal_to', 'label': 'Equal To', 'input_type': 'time'},
    {'name': 'later_than', 'label': 'Later Than', 'input_type': 'time'},
    {'name': 'later_than_or_equal_to',
     'label': 'Later Than Or Equal To',
     'input_type': 'time'}]}
    };
  };

  function onReady() {
    conditions = $("#conditions");
    actions = $("#actions");
    nameField = $("#nameField");
    occupationField = $("#occupationField");
    ageField = $("#ageField");
    submit = $("#submit");
    allData = getInitialData();

    initializeConditions(allData);
    initializeActions(allData);
    initializeForm();
  }

  function initializeConditions(data) {
    conditions.conditionsBuilder(data)
  }

  function initializeActions(data) {
    actions.actionsBuilder(data);
  }

  function initializeForm() {
    for(var i=0; i < occupationOptions.length; i++) {
      var o = occupationOptions[i];
      occupationField.append($("<option>", {value: o.name, text: o.label}));
    }

    submit.click(function(e) {
      e.preventDefault();
      console.log("CONDITIONS");
      console.log(JSON.stringify(conditions.conditionsBuilder("data")));
      console.log("ACTIONS");
      console.log(JSON.stringify(actions.actionsBuilder("data")));
    });
  }
  $(onReady);
})(jQuery);
