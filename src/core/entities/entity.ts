import { UniqueEntityID } from './value-objects/unique-entity-id'

export class Entity<IProps> {
  private _id: UniqueEntityID
  protected props: IProps

  get id() {
    return this._id
  }

  protected constructor(props: IProps, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID(id)
  }
}
