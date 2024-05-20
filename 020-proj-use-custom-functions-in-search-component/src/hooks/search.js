import {computed, ref, watch} from "vue";

export function useSearch(items, filterProp) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableItems = computed(function () {
        if (activeSearchTerm.value) {
            return items.value.filter((prj) =>
                prj[filterProp].includes(activeSearchTerm.value)
            );
        }
        return items.value;
    });

    watch(enteredSearchTerm, function (newValue) {
        setTimeout(() => {
            if (newValue === enteredSearchTerm.value) {
                activeSearchTerm.value = newValue;
            }
        }, 300);
    });

    return { enteredSearchTerm, availableItems }
}