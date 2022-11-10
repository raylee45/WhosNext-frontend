import React from 'react';
import SwipeButtons from './SwipeButtons';

const MatchedList = (users, matchedList, unMatchedList) => {
return(
    
<div id="matchedList">
    <SwipeButtons
      userId={users.id}
      matchedLists={matchedList}
    />
    <SwipeButtons
      userId={users.id}
      unmatchedLists={unMatchedList}
    />
</div>
    
)
}

export default MatchedList;