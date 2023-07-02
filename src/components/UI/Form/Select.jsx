import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {FaCaretDown, FaCheck} from "react-icons/fa";
import {If} from "@/utils/utils.js";

const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
]

const Select = ({genres}) => {
    const [selectedPeople, setSelectedPeople] = useState([])

    return (
        <div className="">
            <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
                <div className="relative mt-1">
                    <Listbox.Button
                        className="relative w-full py-2 pl-3 pr-10 text-left shadow-md bg-white text-primary min-h-[40px]">
                        <span className={`block ${If(!selectedPeople.length, "text-primary--gray")}`}>
                            {selectedPeople.length ?
                                selectedPeople.map(person => person.name).join(", ")
                                :
                                "choose genres"
                            }
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FaCaretDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
              />
            </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({active}) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={person}
                                >
                                    {({selected}) => (
                                        <>
                      <span
                          className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {person.name}
                      </span>
                                            {selected ? (
                                                <span
                                                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <FaCheck className="h-5 w-5" aria-hidden="true"/>
                        </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default Select
