// src/Modules/Users/UserModel.ts
import { Field, ID, ObjectType } from 'type-graphql';
import { Country } from '../Countries/Country';
import { AssignedLicense } from '../Licenses/AssignedLicense';
import { AssignedPlan } from '../Plans/AssignedPlan';
import { ProvisionedPlan } from '../ProvisionedPlans/ProvisionedPlan';
import { UserCreationType } from './CreationType';
import { ExternalUserState } from './ExternalUserState';
import { PasswordProfile } from './PasswordProfile';
import { SignInActivity } from './SignInActivity';
import { UserAgeGroup } from './UserAgeGroup';

@ObjectType()
export class User {
  @Field()
  public aboutMe: string;

  @Field({
    nullable: true,
  })
  public accountEnabled: boolean;

  @Field(() => UserAgeGroup, {
    nullable: true,
  })
  public ageGroup: UserAgeGroup;

  @Field(() => [AssignedLicense])
  public assignedLicenses: AssignedLicense[];

  @Field(() => [AssignedPlan])
  public assignedPlans: AssignedPlan[];

  // @Field({
  //   nullable: true,
  // })
  // public birthday: string;

  @Field(() => [String])
  public businessPhones: string[];

  @Field({
    nullable: true,
  })
  public city: string;

  @Field()
  public companyName: string;

  @Field({
    nullable: true,
  })
  public consentProvidedForMinor?: string;

  @Field(() => Country, {
    nullable: true,
  })
  public country: Country;

  @Field()
  public readonly createdDateTime: string;

  @Field(() => UserCreationType, {
    nullable: true,
  })
  public readonly creationType: UserCreationType;

  @Field({
    nullable: true,
  })
  public readonly deletedDateTime: string;

  @Field({
    nullable: true,
  })
  public department: string;

  @Field()
  public displayName: string;

  @Field({
    nullable: true,
  })
  public employeeId: string;

  @Field(() => ExternalUserState, {
    nullable: true,
  })
  public externalUserState?: ExternalUserState;

  @Field({
    nullable: true,
  })
  public externalUserStateChangeDateTime?: string;

  @Field({
    nullable: true,
  })
  public faxNumber?: string;

  @Field({
    nullable: true,
  })
  public givenName: string;

  @Field({
    nullable: true,
  })
  public readonly hireDate?: string;

  @Field(() => ID)
  public readonly id: string;

  /**
   * TODO: Identities
   */

  @Field(() => [String], {
    nullable: true,
  })
  public imAddresses?: string[];

  @Field(() => [String], {
    nullable: true,
  })
  public infoCatalogs: string[];

  @Field(() => [String], {
    nullable: true,
  })
  public interests: string[];

  @Field({
    nullable: true,
  })
  public isResourceAccount: boolean;

  @Field({
    nullable: true,
  })
  public jobTitle?: string;

  @Field()
  public readonly lastPasswordChangeDateTime: string;

  @Field()
  public legalAgeGroupClassification: string;

  @Field({
    nullable: true,
  })
  public employeeHireDate: Date;

  @Field()
  public mail: string;

  @Field(() => [String])
  public otherMails: string[];

  @Field()
  public passwordPolicies: string;

  @Field(() => PasswordProfile)
  public passwordProfile: PasswordProfile;

  @Field(() => [String])
  public pastProjects: string[];

  @Field()
  public postalCode: string;

  @Field()
  public preferredDataLocation: string;

  @Field()
  public preferredLanguage: string;

  @Field()
  public preferredName: string;

  @Field(() => [ProvisionedPlan])
  public provisionedPlans: ProvisionedPlan[];

  @Field(() => [String])
  public proxyAddresses: string[];

  @Field()
  public refreshTokensValidFromDateTime: string;

  @Field(() => [String])
  public responsibilities: string[];

  @Field(() => [String])
  public schools: string[];

  @Field(() => Boolean)
  public showInAddressList: boolean;

  @Field()
  public signInSessionsValidFromDateTime: string;

  @Field(() => [String])
  public skills: string[];

  @Field(() => [SignInActivity])
  public signInActivity: SignInActivity[];

  @Field()
  public state: string;

  @Field()
  public streetAddress: string;

  @Field()
  public surname: string;

  @Field(() => Country)
  public usageLocation: Country;

  @Field()
  public userPrincipalName: string;

  @Field()
  public userType: string;
}
