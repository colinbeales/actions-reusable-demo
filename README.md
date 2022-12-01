# actions-reusable-demo

Small demo to show reusable actions in use. This is the calling repo...

Shows how reusables can also
- Nest (i.e. call a reusable from a reusable)
- Matrix (i.e. be involked in a matrix strategy)
- Use OIDC (i.e. Call a cloud like Azure/AWS etc... within a reusable) - Note more config required to use the `job_workflow_ref` claim as per [OIDC in Reusables docs](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)

Note: The reusable actions are defined in another repo [colinbeales/actions-reusableworkflows](https://github.com/colinbeales/actions-reusableworkflows)
