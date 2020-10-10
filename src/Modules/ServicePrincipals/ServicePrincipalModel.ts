// src/Modules/ServicePrincipals/ServicePrincipalModel.ts
import { Field, ID, ObjectType } from 'type-graphql';
import { AddIn } from '../AddIns/AddInModel';
import { AppRole } from '../AppRoles/AppRoleModel';
import { InformationalUrl } from '../Info/InformationalUrlModel';
import { KeyCredential } from '../KeyCredentials/KeyCredentialModel';
import { PasswordCredential } from '../PasswordCredentials/PasswordCredentialModel';

@ObjectType()
export class ServicePrincipal {
  @Field(() => Boolean)
  public accountEnabled: boolean;

  @Field(() => [AddIn])
  public addIns: AddIn[];

  @Field(() => [String])
  public alternativeNames: string[];

  @Field({
    nullable: true,
  })
  public appDisplayName?: string;

  @Field()
  public appId: string;

  @Field({
    nullable: true,
  })
  public applicationTemplateId: string;

  @Field({
    nullable: true,
  })
  public appOwnerOrganizationId: string;

  @Field(() => Boolean)
  public appRoleAssignmentRequired: boolean;

  @Field(() => [AppRole])
  public appRoles: AppRole[];

  @Field({
    nullable: true,
  })
  public displayName: string;

  @Field({
    nullable: true,
  })
  public errorUrl: string;

  @Field({
    nullable: true,
  })
  public homepage: string;

  @Field(() => ID)
  public readonly id: string;

  @Field(() => InformationalUrl, {
    nullable: true,
  })
  public info: InformationalUrl;

  @Field(() => [KeyCredential])
  public keyCredentials: KeyCredential[];

  @Field({
    nullable: true,
  })
  public loginUrl: string;

  @Field({
    nullable: true,
  })
  public logoutUrl: string;

  @Field(() => [String])
  public notificationEmailAddresses: string[];

  @Field(() => [PasswordCredential], {
    nullable: true,
  })
  public passwordCredentials?: PasswordCredential[];

  @Field()
  public preferredSingleSignOnMode: string;
}
