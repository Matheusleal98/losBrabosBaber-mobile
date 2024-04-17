import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "../pages/SignIn";

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator 
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="profile" component={SignIn} />
  </App.Navigator>
);

export default AppRoutes;