import React, { Component } from 'react'
import { Text} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Content({children}:any) {
    return (
      <SafeAreaView className='flex-1 px-5 py-3'>

        {children}
      </SafeAreaView>
    );
}

// export default Content
