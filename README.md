# Dev 

See instructions at [DEVELOPMENT](./DEVELOPMENT.md)


# Business Delivery notes 

**Objective**: Communicate implementation and status

## Business status update

We're READY to go live to a test cohort with Builder with some caveats:

1. Only the hCard is consumable or editable.
2. A user can create and edit their hCard, but there are no next steps for user.
3. Data captured by the app is not persisted.
4. Form validation has not yet been implemented. However, this doesn't create security vulnerabilities as there is no persistence. 
5. The team ran out of time to add the icon at first name field.
6. The team ran out of time to test thoroughly from happy path.

### Next steps and Recommendations

**Recommend** GO LIVE as soft launch.

Suggest we should adapt features so that Builder can be monetised, or another business conversion ahead of hard launch.

Suggested now:
1. Connect about what our rollout strategy is for hard launch

Ideally:
2. Implement a persistence layer --or-- if we want this for research only, configure tracking to capture data

Suggest next:
3. Add authentication with our existing platform
4. Consider saving the file upload using our existing Image service
