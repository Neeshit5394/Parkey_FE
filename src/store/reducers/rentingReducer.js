import * as actionTypes from "../actions/actionTypes"

import {
    updatedObject
} from "../utility";

const intialState = {
    activeRentings:[
        {
            "id":"abxyzkkkzyy",
            "description":"Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf sdfhdskjh sdkjhfkds kjhdsk dsjkfd jkhdsf fjhjdsk jkhk dskjbkfjds sdkjhfkds. Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf",
            "price":2,
            "rent_start_date":"12 Jan 2019",
            "rent_end_date":"15 Jan 2019",
            "location":"129 South Street"
          },
      
    ],
    recentRentings:[
        {
            "id":"abxyzzyy",
            "description":"Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf sdfhdskjh sdkjhfkds kjhdsk dsjkfd jkhdsf fjhjdsk jkhk dskjbkfjds sdkjhfkds. Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf",
            "price":2,
            "rent_start_date":"12 Jan 2019",
            "rent_end_date":"15 Jan 2019",
            "billed_amount":200,
            "location":"129 South Street",
            "user_rent_end_date":"18 Jan 2019"
          },
          {
            "id":"abxykkzzyy",
            "description":"Somedafsdfjdsfdsjbjkdsfkjds jdfhjds kdjfdsj he bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf sdfhdskjh sdkjhfkds kjhdsk dsjkfd jkhdsf fjhjdsk jkhk dskjbkfjds sdkjhfkds. Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf",
            "price":5,
            "rent_start_date":"12 Jan 2019",
            "rent_end_date":"15 Jan 2019",
            "billed_amount":500,
            "user_rent_end_date":"19 Jan 2019",
            "location":"135 Cambridge Avenue"
    
          }

    ]
    
};

export default (state = intialState, action) => {
    switch (action.type) {

        case actionTypes.END_RESERVATION:
            return updatedObject(state, {
                activeRentings:state.activeRentings.filter( val => val !== action.payload ),
                 recentRentings:[...state.recentRentings, action.payload]
            })

        default:
            return state;
    }
};
