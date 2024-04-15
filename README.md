# Dev 

See instructions at [DEVELOPMENT](./DEVELOPMENT.md)


# Delivery notes 

## Business status update

We're READY to go live to a test cohort with Builder with some caveats:

1. Only the hCard is consumable or editable.
2. A user can create and edit their hCard, but there are no next steps for user.
3. Data captured by the app is not persisted.
4. Form validation has not yet been implemented. Note, no security issues as there is no persistence. 
5. The team ran out of time to add the icon at first name field.
6. The team ran out of time to test thoroughly from happy path.

### Next steps and Recommendations

**Recommend** GO LIVE with soft launch.

To 1, 2, 3 - suggest we consider what our business conversions will be ahead of hard launch.
 
* **Now:** Awaiting confirmation to deploy to production.
* **Now:** Team is currently addressing points 4, 5, 6.
* **Next** Implement persistence --or-- if research only, consider whether tracking may fulfil our needs.
* **Later:** Add authentication with our existing platform.
* **Later:** Consider saving the file upload using our existing Image service.
