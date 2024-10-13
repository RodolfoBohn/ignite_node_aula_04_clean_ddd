import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/value-objects/unique-entity-id"

interface IStudentProps {
  name: string
}

export class Student extends Entity<IStudentProps> {
  static create(
    props: IStudentProps,
    id?: UniqueEntityID,
  ) {
    const student = new Student(props, id)
    return student
  }
}