import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PartyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Party {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly description: string;
  readonly qantbillet: number;
  readonly price: number;
  readonly products: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Party, PartyMetaData>);
  static copyOf(source: Party, mutator: (draft: MutableModel<Party, PartyMetaData>) => MutableModel<Party, PartyMetaData> | void): Party;
}